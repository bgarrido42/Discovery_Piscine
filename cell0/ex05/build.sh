#! /bin/bash
i=1;
if [ $# -eq 0 ];
	then
		echo "No args"
		exit 1
	fi
for user in "$@"
do
	mkdir ex$user
	i=$((i + 1));
done
