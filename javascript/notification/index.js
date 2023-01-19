Notification.requestPermission((permission) => {
  if (permission == "granted") {
    console.log("Notification: Access Granted")

    let notification = new Notification("Yo !!!", {
      body: 'Vous avez un nouveau message !',
      icon: "https://picsum.photos/50"
    })

    notification.onclick = () => window.open('notification.html', '_blank')
  }
  else {
    console.log("Notification: Access Refused. Veuillez authoriser les notifications.")
  }
})

