import { Box, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import './components/Header'
import Header from './components/Header';
import NewTransections from './components/NewTransections';
import Transections from './components/Transections';



const useStyle = makeStyles({
  component: {
    background: '#fff',
    display: 'flex',
    gap: 15,
    '&>*': {
      marginBottom: 30,
      width: '50%',
    },
    width: 800,
    padding: 20,
    borderRadius: 20,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 2px',
  }
})

function App() {
  const classes = useStyle();

  const [transections, setTransections] = useState([]);

  const deletetransection = (id) => {
    setTransections(transections.filter((transection) => {
      return transection.id !== id;
    }))
  }

  const addtransection = (transection) => {
    setTransections(transections => [transection, ...transections]);
  }

  return (
    <>
      <div className="App">
        <Header />
        <Box className={classes.component}>
          <Box>
            <Balance transections={transections} />
            <ExpenseCard transections={transections} />
            <NewTransections addtransection={addtransection} />
          </Box>
          <Box>
            <Transections transections={transections} deletetransection={deletetransection} />
          </Box>
        </Box>

      </div>
    </>
  );
}

export default App;
