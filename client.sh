#!/bin/bash

BASE_URL="http://127.0.0.1:5000/api/v1/tasks"

while true
do
	echo '1 - Get All Tasks'
	echo '2 - Create Task'
	echo '3 - Get Single Task'
	echo '4 - Update Task'
	echo '5 - Delete Task'

	read opt
	echo "Choice: ${opt}"
	case $opt in
		'1')
			curl -s "${BASE_URL}" | jq '.'
			;;
		'2')
			;;
		'3')
			;;
		'4')
			;;
		'5')
			;;
		*)
			;;
	esac
done
