//(function (){
    let socket = new WebSocket("ws://127.0.0.1")

    socket.addEventListener("message", pushAndShowNotification)

    function pushAndShowNotification(Notification) {
        let notificationWrapper = document.getElementById("Notifications")

        notificationWrapper.innerHTML += makeNotificationElement(Notification.data)
    }

    function makeNotificationElement(notificationData) {
        notificationData = JSON.parse(atob(notificationData))
        console.log(notificationData)

        const date = notificationData.date
        const msg  = notificationData.msg

        return `
            <div class="Notification show">
                <div class="Notification-title">${msg}</div>
                <div class="Notification-date">${date}</div>
            </div>
        `
    }

    setInterval(() => {
        let data = 'asdasd' //btoa(JSON.stringify({msg: "teste", date: Math.random()*10}))
        socket.send(data)
    }, 1000)
//})()


