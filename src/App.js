import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import AddNewForm from "./components/AddNewForm";
import Code from "./Code";

function App() {
  const [code, setCode] = useState(false);
  const audios = [
    {
      value:
        "https://notificationsounds.com/storage/sounds/file-sounds-1154-done-for-you.mp3",
      label: "Alert 1",
    },
    {
      value:
        "https://notificationsounds.com/storage/sounds/file-sounds-1153-piece-of-cake.mp3",
      label: "Alert 2",
    },
    {
      value:
        "https://notificationsounds.com/storage/sounds/file-sounds-1151-swiftly.mp3",
      label: "Alert 3",
    },
    {
      value:
        "https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3",
      label: "Alert 4",
    },
  ];
  const [audio, setAudio] = useState(
    "https://notificationsounds.com/storage/sounds/file-sounds-1154-done-for-you.mp3"
  );
  const [form, setForm] = useState({
    firstTitle: "",
    secondTitle: "",
    firstEmoji: "",
    secondEmoji: "",
    timeInterval: "",
    timeDelay: "",
  });

  const handleScript = (e) => {
    if (
      form.firstTitle !== "" &&
      form.secondTitle !== "" &&
      form.timeDelay !== "" &&
      form.timeInterval !== ""
    ) {
      setCode(true);
    } else {
      alert("All fields are required");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setAudio(e.target.value);
  };

  function handleSubmit(e) {
    console.log(form);
    e.preventDefault();
    // setForm({
    //   firstTitle: "",
    //   secondTitle: "",
    //   firstEmoji: "",
    //   secondEmoji: "",
    //   timeInterval: "",
    //   timeDelay: "",
    // });
    // setCode(false);
  }

  const addFirstEmoji = (emoji, event) => {
    setForm((prevState) => ({
      ...prevState,
      firstTitle: prevState.firstTitle + emoji.native,
    }));
  };

  const addSecondEmoji = (emoji, event) => {
    setForm((prevState) => ({
      ...prevState,
      secondTitle: prevState.secondTitle + emoji.native,
    }));
  };

  return (
    <div className="App">
      <Header />
      <div className="p-8">
        <div className="grid grid-cols-2 gap-4 items-center">
          <AddNewForm
            handleChange={handleChange}
            form={form}
            audios={audios}
            audio={audio}
            handleSubmit={handleSubmit}
            handleSelect={handleSelect}
            handleScript={handleScript}
            addFirstEmoji={addFirstEmoji}
            addSecondEmoji={addSecondEmoji}
          />

          <div>
            <Code form={form} code={code} audio={audio} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
