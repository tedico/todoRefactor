console.log("yew 🏄🏄🏄 from index.js")
import app from './App'
import updateState from './UpdateState'
import initModel from './Model'
import view from './View'

const rootNode = document.getElementById('root')

app(initModel, updateState, view, rootNode)