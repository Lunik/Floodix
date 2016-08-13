#!/bin/sh


for dir in logs data
do
  if ! [ -d $dir ]
    then echo "==> Creating $dir"
    mkdir $dir
  fi
done

if ! [ -f configs/config.json ]
  then echo "==> Copying configs"
  cp configs/config.default configs/config.json
fi

for data in xp
do
  if ! [ -f "data/$data.json" ]
    then echo "==> Creating $data.json"
    echo "{}" > "data/$data.json"
  fi
done
