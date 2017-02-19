		var link = document.querySelector(".top-feedback");
		
		var popup = document.querySelector(".feedback-modal-wrapper");
		
		var close = popup.querySelector(".feedback-modal-close");
		
		var Name = popup.querySelector("[name=name]");

		link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("feedback-modal-wrapper-show");
		Name.focus();
      });
	  
	  close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("feedback-modal-wrapper-show");
      });
	  
	  window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("feedback-modal-wrapper-show")) {
            popup.classList.remove("feedback-modal-wrapper-show");
          }
        }
      });
 