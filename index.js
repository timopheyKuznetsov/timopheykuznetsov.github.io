readButton.addEventListener("click", async () => {
  log("User clicked scan button");

  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    log("> Scan started");

    ndef.addEventListener("readingerror", () => {
      log("Argh! Cannot read data from the NFC tag. Try another one?");
    });

    ndef.addEventListener("reading", ({ message, serialNumber }) => {
      log(`> Serial Number: ${serialNumber}`);
      log(`> Records: (${message.records.length})`);
    });
  } catch (error) {
    log("Argh! " + error);
  }
});
writeButton.addEventListener("click", async () => {
  document.getElementById("writeUrl").addEventListener("click", async () => {
  log("writeUrlLog", "User clicked write button");

  const ndef = new NDEFReader();
  try {
    await ndef.write({
      records: [{ recordType: "url", data: "https://timopheykuznetsov.github.io/" }]
    });
    log("writeUrlLog", "> URl Message written");
  } catch {
    log("writeUrlLog", "Argh! " + error);
  }
});
});

makeReadOnlyButton.addEventListener("click", async () => {
  log("User clicked make read-only button");

  try {
    const ndef = new NDEFReader();
    await ndef.makeReadOnly();
    log("> NFC tag has been made permanently read-only");
  } catch (error) {
    log("Argh! " + error);
  }
});
