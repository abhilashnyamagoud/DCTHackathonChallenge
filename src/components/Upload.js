import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import * as R from 'ramda'
import {Row, Col, Card, Form} from 'react-bootstrap';
import {Link,Route,Redirect} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {setStudents} from '../actions/studentsAction' 
import studentsReducers from '../reducers/studentReducers';
import swal from 'sweetalert';
import Graph from './Graph'

function Upload(props) {
	const [toggle,setToggle]=useState(false)
	const [words, setWords] = useState([])
	const [userName, setUsername] = useState([])
	const submitForm = (e) => {
		e.preventDefault()
		// console.log(file)
	}
	const dispatch=useDispatch()
	const comments=useSelector(state=>state.students)
	const openFile = function (event) {
		const input = event.target
		const reader = new FileReader()
		reader.onload = function () {
			const text = reader.result
			// console.log(text)
			const eachLine = text.trim().split(/\n/)
			const eachWord = eachLine.map((ele) => {
				return ele.split(' ')
			})
			setWords(eachWord)
			const listOfStudents = eachWord.map((ele) => {
				return ele[3]
			})
			const username = _.uniq(listOfStudents)
			const numberOfComments = R.countBy(R.toLower)(listOfStudents)
			setUsername(username)
			dispatch(setStudents(numberOfComments))
			// console.log(userName)
			// console.log(numberOfComments)

		}
		reader.readAsText(input.files[0])
	}
	// console.log(userName)
	const liClick = (ele) => {
		// console.log(ele.toLowerCase())
		// console.log('comments' ,comments)
		swal(ele.toLowerCase())
	}
	return (
		<Row>
			<Col>
			<button onClick={()=>{
				swal({
					title: "Good job!",
					text: "You Successfully Logged-out!",
					icon: "success",
					button: "Aww yiss!",
				  })
				setToggle(true)
				
			}}  className='btn btn-sm btn-outline-danger text-dark'>Logout</button>
			<Card>
				<Card.Header>
					<Card.Title>Please Select Your Chat File</Card.Title>
				</Card.Header>
				<Card.Body>
					<Form onSubmit={submitForm}>
						<Row>
							<Col md={6}>
							<Form.Group>
								<Form.Label>Select File</Form.Label>
								<Form.Control className='form-control-file' type='file' accept='text/plain' onChange={openFile} />
							</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col md={3}>
							<Form.Group>
								<Form.Control type='submit' value='Submit' className='btn btn-primary btn-sm' />
							</Form.Group>
							</Col>
						</Row>
					</Form>
					<Row>
						<Col md={6}>
					<ul className='list-group'>
					{
						userName.map((ele,i)=>{
							return (
							<li key={i} onClick={()=>{
								liClick(ele)
							}} className='list-group-item list-group-item-action text-center' >{ele}  </li>	
							)
						})
					}
					</ul>
					</Col>
					<Col md={6}>
					<Graph/>	
					</Col>
					</Row>
				</Card.Body>
			</Card>
			</Col>
			{
				toggle &&  <Redirect to='/' />
			}
		</Row>	
	)
}

export default Upload
