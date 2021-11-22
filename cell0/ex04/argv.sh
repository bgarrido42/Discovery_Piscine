#!bin/bash

if [ $# = 0 ];
then 
	echo "No arguments";
else
	if [ $# = 1 ];
	then
		echo "$1"
	fi
	if [ $# = 2 ];
	then
		echo "$1"
		echo "$2"
	fi
	if [ $# = 3 ];
	then
		echo "$1";
		echo "$2";
		echo "$3";
	fi
	if [ $# -gt 3 ];
	then 
		echo "$1";
		echo "$2";
		echo "$3";
	fi
fi
