import React, {useEffect, useRef} from 'react'
import { Grid } from '@material-ui/core';
import Main from './components/Main/Main';
import { Provider } from './context/context';
import Details from './components/Details/Details';
import useStyles from './styles';
import { SpeechProvider, SpeechState } from '@speechly/react-client';
import {PushToTalkButton, PushToTalkButtonContainer , ErrorPanel} from '@speechly/react-ui';
import {  useSpeechContext} from '@speechly/react-client';

const App = () => {
  const classes = useStyles();
  const { speechState} = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();
  useEffect(() => {
      if(speechState === SpeechState.Recording ){
        executeScroll();
      }
  }, [speechState]);

  return (
    <SpeechProvider appId="0e5499a2-5154-4f78-8ab7-41b2f0e27c94" language="en-US">
    <Provider>
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh' }}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
            <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last} >
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
    </Provider>
    </SpeechProvider>
  )
}

export default App;
