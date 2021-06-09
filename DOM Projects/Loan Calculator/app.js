// Listen for submit
document.getElementById('loan-form').addEventListener('submit',calculateResults);
// calculateResults func

function calculateResults(e){
    document.querySelector('#results').style.display='none';
    // UI Vars
    const amount=document.getElementById('amount');
    const interest=document.getElementById('interest');
    const years=document.getElementById('years');

    const monthlyPayment=document.getElementById('monthly-payment');
    const totalPayment=document.getElementById('total-payment');
    const totalInterest=document.getElementById('total-interest');
    
    const principal=parseFloat(amount.value);
    const calculatedInterest=parseFloat(interest.value)/100/12;
    const calculatedPayments= parseFloat(years.value)*12;

    // compute monthly payments, total payment and total interest
    const x=Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly=(principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        document.querySelector('#loading').style.display='block';
        window.setTimeout(load,1000);
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calculatedPayments).toFixed(2);
        totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2);
    }else{
        document.querySelector('#loading').style.display='block';
        window.setTimeout(loaderror,1000);
        
    }

    e.preventDefault();
}


// showError func

function showError(error){

    // creating alert div
    const errorDiv= document.createElement('div');

    // adding classes and text
    errorDiv.className='alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    // getting dom elements text and card
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');

    // insert error alert into dom
    card.insertBefore(errorDiv,heading);

    // SetTimeout for error mssg
    window.setTimeout(clearError,3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}

// load
function load(){
    document.querySelector('#loading').style.display='none';
    document.querySelector('#results').style.display='block';
}

function loaderror(){
    document.querySelector('#loading').style.display='none';
    showError('Please Check Your Numbers');
}