  
    
    /* For updating the iframe */
     function setFrame() {
      var checkBox = document.getElementById('autorun').checked;
      if(checkbox.checked == "true"){
        var editorHTML = editor.value;
    		var iframe = document.getElementById('outputIframe');
    		iframe.contentWindow.document.open();
    		iframe.contentWindow.document.write(editorHTML);
    		iframe.contentWindow.document.close();
      }else{
        
      }
    }
    	
    	
    	function runButton(){
    	  var editorHTML = editor.value;
    		var iframe = document.getElementById('outputIframe');
    		iframe.contentWindow.document.open();
    		iframe.contentWindow.document.write(editorHTML);
    		iframe.contentWindow.document.close();
    	}
    	
    	 $(document).ready(function() {
          var name = Cookies.get('_username');
          if (name) {
            $('#editor').val(name);
          }
          $('#editor').keydown(function() {
            var inputName = $('#editor').val();
            Cookies.set('_username', inputName);
          })
        });

    	
    	// For making tab work.
    	$(document).delegate('#editor', 'keydown', function(e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode == 9) {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
    
        // set textarea value to: text before caret + tab + text after caret
        $(this).val($(this).val().substring(0, start)
                    + "\t"
                    + $(this).val().substring(end));
    
        // put caret at right position again
        this.selectionStart =
        this.selectionEnd = start + 1;
      }
    });