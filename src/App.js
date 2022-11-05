import './App.css';
import FunctionalPart from './components/functionalPart/FunctionalPart';
import LandingPage from './components/landingPage/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import SortingMain from './components/functionalPart/sorting-algos/SortingMain'
import PathFindingMain from './components/functionalPart/path-finding/PathFindingMain';
import JoinForm from './components/code-editor/JoinForm';
import EditorPage from './components/code-editor/EditorPage';
import CodeEditorHome from './components/code-editor/CodeEditorHome';
import { Toaster } from 'react-hot-toast'
import OnlineIDE from './components/online-ide/OnlineIDE';



function App() {
  return (
    <>
        <div>
            <Toaster></Toaster>
        </div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<LandingPage />}/>
              <Route path='/algos' element={<FunctionalPart />}>
                <Route path='/algos/sorting' element={<SortingMain />}/>
                <Route path='/algos/path-finding' element={<PathFindingMain />} />
              </Route>
              <Route path='/code-editor' element={<CodeEditorHome />}>
                <Route index element={<JoinForm />}/>
                <Route path='/code-editor/room/:roomID' element={<EditorPage />}/>
              </Route>
              <Route path='/online-ide' element={<OnlineIDE />}/>
              <Route path='*' element={<ErrorPage />}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
