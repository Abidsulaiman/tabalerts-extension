import React, {useState} from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'


const AddNewForm = ({
  handleChange, 
  addFirstEmoji, 
  addSecondEmoji,
  handleSubmit,
  handleSelect,
  handleScript,
  form,
  audio,
  audios
}) => {
  const [showFirstEmoji, setShowFirst] = useState(false)
  const [showSecondEmoji, setShowSecond] = useState(false)
  const toggleFirstPicker = () => {
    setShowFirst(!showFirstEmoji)
    setShowSecond(false)
  };
  const toggleSecondPicker = () => {
    setShowSecond(!showSecondEmoji)
    setShowFirst(false)
  };

  const playAudio = () => {
    let audioValue = document.getElementById('outlined-select-audio-native').value;
    let audio = new Audio(audioValue)
    audio.play();
  }

  return (
    
  <form noValidate autoComplete="off" onSubmit={handleSubmit}>

    <div className="title mb-4">
      <h3 className="text-gray-900 font-bold text-lg">Fill the script form</h3>
    </div>
      
        <div className="relative mb-4">
          <input
            id="input-with-icon-textfield"
            placeholder="First Title"
            name="firstTitle"
            class="form-control"
            onFocus={() => {
              setShowFirst(false)
              setShowSecond(false)
            }}
            value={form.firstTitle}
            onChange={handleChange}
          />
          <button onClick={toggleFirstPicker} className="absolute top-1/2 transform -translate-y-1/2 right-4"><i class="bi bi-emoji-heart-eyes text-lg"></i></button>
          {showFirstEmoji && <Picker set='apple' onSelect={addFirstEmoji}/>}
        </div>

        <div className="mb-4 relative">
          <input
              id="input-with-icon-textfield"
              placeholder="Second title"
              required
              name="secondTitle"
              class="form-control"
              onFocus={()=> {
                setShowFirst(false)
                setShowSecond(false)
              }}
              value={form.secondTitle}
              onChange={handleChange}
            />
            <button onClick={toggleSecondPicker} className="absolute top-1/2 transform -translate-y-1/2 right-4"><i class="bi bi-emoji-heart-eyes text-lg"></i></button>
            {showSecondEmoji && <Picker set='apple' onSelect={addSecondEmoji}/>}
        </div>
        <div className="mb-4 relative">
          <select
            id="outlined-select-audio-native"
            name="setAudio"
            class="form-control"
            value={audio}
            onChange={handleSelect}
          >
            {audios.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <button onClick={playAudio} className="absolute top-1/2 transform -translate-y-1/2 right-6" title="Play alert sound">
            <i class="bi bi-play-fill text-xl text-green-500"></i>
          </button>
        </div>

        <div className="mb-4">
          <input
            required
            type="number"
            class="form-control"
            name="timeInterval"
            placeholder="Time Interval"
            value={form.timeInterval}
            onChange={handleChange}
            />
        </div>

        <div className="mb-4">
          <input
            required
            type="number"
            name="timeDelay"
            class="form-control"
            placeholder="Time Delay"
            value={form.timeDelay}
            onChange={handleChange}
            />
        </div>

        <div className="flex">
          <button
            type="submit"
            className="btn m-2 bg-gray-100 text-gray-900 flex-1"
          >
            Clear Form
          </button>
          <button
          className="btn bg-gradient-to-r from-blue-600 to-green-600 m-2 text-white flex-1"
            onClick={handleScript}
          >
            Generate Script
          </button>
        </div>
   
  </form>
  )
}

export default AddNewForm
