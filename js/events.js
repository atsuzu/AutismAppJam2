$(document).ready(function(){
    $("#sportId").hide();
    $("#gameId").hide();
    $("#foodId").hide();
    $("#createModalWarning").hide();

     $('#profileId').click(function(e) {
        e.preventDefault();

        window.location.replace("profile.html");
        
    });

    $('#homeId').click(function(e) {
        e.preventDefault();

        window.location.replace("events.html");
        
    });

    $('#createButtonId').click(function() {
        
        $('#createEventModal').on('shown.bs.modal', function () {
            $("#createModalWarning").hide();
        })
        
    });

    $('#joinTypeSubmitId').click(function(e) { // for join event
        e.preventDefault();
        
        $('#joinEventModal').on('shown.bs.modal', function () {
            
        })

    });

    $('#joinButtonId').click(function() {
        $("#joinId").removeClass("fa fa-chevron-up fa-5x");
        $("#joinId").addClass("fa fa-hand-o-down fa-5x");
        $("#joinOptionsID").toggle();
        
    });

    $('#joinTypeSubmitId').click(function() {
        var eventType = document.getElementById("selJoinId").value;
        if (eventType == 'Sports'){
            $('#gameId').hide();
            $('#foodId').hide();
            $('#GameshowChatId').hide();
            $('#sportId').show();
        }
        else if(eventType == 'Games'){
            $('#foodId').hide();
            $('#sportId').hide();
            $('#GameshowChatId').hide();
            $('#gameId').show();
        }
        else if(eventType == 'Food'){
            $('#GameshowChatId').hide();
            $('#gameId').hide();
            $('#sportId').hide();
            $('#foodId').show();
        }
        else{
            $('#gameId').hide();
            $('#foodId').hide();
            $('#sportId').hide();
            $('#GameshowChatId').show();
        }
        
    });

    $('#createEventButtonId').click(function() {
        if ($("#eventDesId").val() != ''){
            $("#createModalWarning").html("Your event has been sucessfully created!");
            $("#createModalWarning").show();
        }
        else{
            $("#createModalWarning").removeClass().addClass("alert alert-danger error-resize center");
            $("#createModalWarning").html("Event description cannot be empty!");
            $("#createModalWarning").show();
        }
    });

});





