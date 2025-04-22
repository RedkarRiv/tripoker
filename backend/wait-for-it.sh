#!/bin/bash

# wait-for-it.sh

# Argumentos:
# $1 - El host (nombre del servicio, en este caso `db`)
# $2 - El puerto (en este caso, 3306)
# $3 y lo siguiente - El comando que se ejecutará una vez que el servicio esté listo (en este caso, el backend)

HOST=$1
PORT=$2
shift 2
COMMAND="$@"

# Esperar a que el servicio en el host y puerto esté disponible
until nc -z -v -w30 $HOST $PORT; do
  echo "Esperando a que $HOST:$PORT esté disponible..."
  sleep 1
done

# Ejecutar el comando después de que el servicio esté disponible
echo "$HOST:$PORT está listo. Ejecutando comando..."
exec $COMMAND