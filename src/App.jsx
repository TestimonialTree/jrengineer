import './App.css'
import IncrementingButton from './problems/IncrementingButton';
import WorkingWithArrays from './problems/WorkingWithArrays';
import Question from './ProblemWrapper';

// TODO
// 1. Add a background color on the entire page to be #282c34 (text white)
// 2. Add a block of larger text on the page with your name
// 3. Add some spacing around the entire page
// 4. Add some padding or margin around each question 
// 5. Make the description of the question bold and of size 12px

function App() {
  return (
    <div>
      <Question description="Implement incrementing button.">
        <IncrementingButton />
      </Question>

      <Question description="Working with arrays">
        <WorkingWithArrays input={[1, 2, 3, 4, 5]} />
      </Question>
    </div>
  )
}

export default App
