import React, { useState, useEffect } from 'react'

export const Test = (props) => {

	useEffect(() => {
    console.log('test')
		return () => {
			console.log('[]')
		}
	}, [])

  console.log(123124123)

	useEffect(() => {
    console.log(123)
		return () => {
			console.log('test', props.test)
		}
	}, [props.test])

	return (
		<div>Test2</div>
	)
}
