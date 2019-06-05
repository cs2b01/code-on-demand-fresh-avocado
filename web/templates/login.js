function getData(){
        $('#action').show();
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function (response) {
                //alert(JSON.stringify(response));
                $('#action').hide();
            },
            error: function (response) {
                //alert(JSON.stringify(response));
                if (response['status'] == 401) {
                    $('#success-image').hide();
                    $('#fail-image').show();
                    $('#action').hide();
                } else {
                    $('#fail-image').hide();
                    $('#success-image').show();
                    $('#action').hide();
                }
            }
        });
    }