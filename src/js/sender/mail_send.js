import axios from "axios";

const clearForm = form => {
    var input_elements = form.querySelectorAll("input");
    Array.from(input_elements).forEach(item => item.value = "");
};

const modalThanks = text => {
    $("#content .modal__text").text(text);
    $.fancybox.open({
        src:"#content",
        type:"inline"
    });
    setTimeout(_ => {
        $.fancybox.close(true);
    }, 5000);
};

export const SEND = () => {
    Array.from(document.querySelectorAll("form")).forEach(item => {
        item.addEventListener("submit", function (e) {
            e.preventDefault();
            let formData = new FormData(this);
            var self = this;
            axios.post("/sender", formData)
                .then(resp => {
                    modalThanks("Спасибо за обращение!");
                    if (resp.data.status) {
                        clearForm(self);
                    }
                });
            return false;
        });
    })
};

