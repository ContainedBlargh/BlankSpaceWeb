function establishConnection(){
    let connection = $.hubConnection();
    let canvasHubProxy = connection.createHubProxy("canvasHub");
    //REGISTER THE METHODS:

    //OK
    $.connection.hub.url = "http://localhost:5678";
}