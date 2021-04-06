
(function ($) {
    "use strict";


   
    var input = $('.validate-input .input100');
    var input2 = $('.validate-input .checkbox');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }


        if($('.checkbox').is(':checked')) {
             
        } else {
            showValidate(input2);
             check=false;
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });

    });

    $('.validate-form .checkbox').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });

    });

function validateCheck (input2) {
    if( $('.checkbox').is(':checked') ) {
    alert('Seleccionado');
}
}
    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery); 

/*var namePattern = "^[a-z A-Z]{4,30}$";
var emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";

function checkInput(idInput, pattern) {
    return $(idInput).val().match(pattern) ? true : false;
}

function checkTextarea(idText) {
    return $(idText).val().length > 12 ? true : false;  
}

function checkRadioBox(nameRadioBox) {
  return $(nameRadioBox).is(":checked") ? true : false;
}


function enableSubmit (idForm) {
    $(idForm + " contact100-form-btn.submit").removeAttr("disabled");
}

function disableSubmit (idForm) {
    $(idForm + " contact100-form-btn.submit").attr("disabled", "disabled");
}

function checkForm (idForm) {
    $(idForm + " *").on("change keydown", function() {
        if (checkInput("#name", namePattern) && 
      checkInput("#email", emailPattern) && 
            checkTextarea("#comentario") && 
            checkRadioBox("#legal") &&
        {
            enableSubmit(idForm);
        } else {
            disableSubmit(idForm);
        }
    });
}

$(function() {
    checkForm("#contact");
}); */