//cleanup dockers 
docker images --no-trunc --format '{{.ID}}' | xargs docker rmi 