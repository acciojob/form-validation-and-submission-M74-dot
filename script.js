//your JS code here. If required.
document.addEventListener('DOMContentLoaded',()=>{
	const chkBtn = document.querySelector('#chk-btn');
    const nameField = document.querySelector('#name');
    const submitBtn = document.querySelector('#submit-btn');
    const form = document.querySelector('#myForm');

	function validateForm(){
		if(chkBtn.checked && nameField.value.trim()!==''){
			submitBtn.disabled=false;
		}else{
			submitBtn.disabled=true;
		}
	}
	validateForm();
	chkBtn.addEventListener('change',validateForm);
	nameField.addEventListener('input',validateForm);

	form.addEventListener('submit',(event)=>{
		if(!chkBtn.checked || chkBtn.value.trim()!===''){
			event.preventDefault(); // Prevent form submission
            alert('Please fill out all required fields and accept the terms and conditions.');
       
		}
	})
});