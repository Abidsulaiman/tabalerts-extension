import React, {useRef, useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton'
import { Tooltip } from '@material-ui/core';
import './Code.css'

const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }))(Tooltip);

const Code = ({form, code, audio}) => {
    const [copySuccess, setCopySuccess] = useState('');
    const textRef = useRef("");

  const script = `
  <script>let hidden,visibilityChange,backupTitle=document.title,newTitle="`+form.firstEmoji + form.firstTitle+`",secondaryTitle="`+form.secondEmoji + form.secondTitle+`",configInterval="`+form.timeInterval+`",configDelay="`+form.timeDelay+`",configActive=0;configInterval=parseInt(configInterval),configDelay=parseInt(configDelay),void 0!==document.hidden?(hidden="hidden",visibilityChange="visibilitychange"):void 0!==document.mozHidden?(hidden="mozHidden",visibilityChange="mozvisibilitychange"):void 0!==document.msHidden?(hidden="msHidden",visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(hidden="webkitHidden",visibilityChange="webkitvisibilitychange");let now=new Date,configLastSwitch=now.getTime();function cron(){if(0!==configActive){let i=new Date;if((i=i.getTime())-1e3*configInterval>configLastSwitch)return change(1,1e3*configInterval),void(configLastSwitch=i);setTimeout(function(){cron()},100)}}var sound=new Audio("`+audio+`");function restore(){document.title=backupTitle,cron(),sound.pause()}function change(i,e){0!==i?(document.title=newTitle,setTimeout(function(){document.title=secondaryTitle},e),setTimeout(function(){change(i-1,e),sound.play()},2*e)):restore()}function handleVisibilityChange(){document[hidden]?(document.title=newTitle,setTimeout(function(){configActive=1,cron()},1e3*configDelay)):(configActive=0,document.title=backupTitle)}document.addEventListener(visibilityChange,handleVisibilityChange,!1),cron();</script>

  `;

    console.log(textRef.current.value)

    function copyToClipboard(e) {
        if(textRef.current.value == "Fill the fields"){
            setCopySuccess('Fill the fields');
        }else{
            textRef.current.select();
            document.execCommand('copy');
            // This is just personal preference.
            // I prefer to not show the the whole text area selected.
            e.target.focus();
            setCopySuccess('Copied!');

            setTimeout(function(){
                document.getElementById('successMsg').style.display = 'none'
            }, 2000)
        }
      };

    return (
        <div className="code">
            <div className="head">
                <h3>Script Generated:
                    <span
                        id="successMsg"
                        style={{color: 'lime', fontSize: 12, fontWeight: 400, marginLeft: 10}}
                    >
                        {copySuccess}
                    </span>
                </h3>
                <LightTooltip onClick={copyToClipboard} title="Copy" placement="right-start">
                    <IconButton aria-label="Copy" size="small">
                        <FileCopyIcon style={{color: '#fff'}} fontSize="medium"/>
                    </IconButton>                    
                </LightTooltip>
            </div>
            <textarea readOnly id="scriptGenerated" className="scriptGenerated" ref={textRef}
                value={code ? script : "Fill the fields"}
            >
                
            </textarea>
        </div>
    )
}

export default Code
