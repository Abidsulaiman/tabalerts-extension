import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputAdornment from '@material-ui/core/InputAdornment';
import PlayIcon from '@material-ui/icons/PlayCircleFilled';
import EmojiEmotions from '@material-ui/icons/EmojiEmotionsOutlined';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%'
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0077B5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#30C191",
      contrastText: "#fff",
    },
  },
});

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
  const classes = useStyles()
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
    <ThemeProvider theme={theme}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems='center'>   
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                id="input-with-icon-textfield"
                label="First Title"
                name="firstTitle"
                variant="outlined"
                color="primary"
                onFocus={() => {
                  setShowFirst(false)
                  setShowSecond(false)
                }}
                value={form.firstTitle}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmojiEmotions onClick={toggleFirstPicker} style={{cursor: 'pointer'}}/>
                    </InputAdornment>
                  ),
                }}
              />
                {showFirstEmoji && <Picker set='apple' onSelect={addFirstEmoji}/>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                  id="input-with-icon-textfield"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.input}
                  label="Second Title"
                  name="secondTitle"
                  color="primary"
                  variant="outlined"
                  onFocus={()=> {
                    setShowFirst(false)
                    setShowSecond(false)
                  }}
                  value={form.secondTitle}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmojiEmotions onClick={toggleSecondPicker} style={{cursor: 'pointer'}}/>
                      </InputAdornment>
                    ),
                  }}
                />
                {showSecondEmoji && <Picker set='apple' onSelect={addSecondEmoji}/>}
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="outlined-select-audio-native"
                select
                className={classes.input}
                label="Select Audio"
                name="setAudio"
                value={audio}
                onChange={handleSelect}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {audios.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={playAudio} 
                style={{ width: "100%"}}
              >
                <PlayIcon 
                  className={classes.playIcon}
                />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="number"
                className={classes.input}
                name="timeInterval"
                color="primary"
                label="Time Interval"
                variant="outlined"
                value={form.timeInterval}
                onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="number"
                className={classes.input}
                name="timeDelay"
                label="Time Delay"
                color="primary"
                variant="outlined"
                value={form.timeDelay}
                onChange={handleChange}
                />
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                size="large"
                style={{ width: "100%", padding: "1rem"}}
              >
                Clear Form
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={handleScript}
                variant="contained"
                color="secondary"
                size="large"
                style={{ width: "100%", padding: "1rem"}}
              >
                Generate Script
              </Button>
            </Grid>
          </Grid>
      </form>
      </ThemeProvider>
  )
}

export default AddNewForm
