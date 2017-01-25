let msgnr = 0;

let write = (msg) => {
  document.write("<h3>Message #", msgnr, "</h3>");
  document.write("<blockquote>Message: ", msg.message, "</blockquote>");
  document.write("<blockquote>Number: ", msg.number, "</blockquote>");
  msgnr += 1;
}

let dl = () => {

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status == 200) {
          let msg = JSON.parse(xhr.responseText);
          write(msg);
        } else {
            console.log("Failed to load page. Status: ", xhr.status);
        }
    }
  }
  xhr.open("GET", "fetch.php?filename=hello.json.gz", true);
  xhr.send();

}

dl();
