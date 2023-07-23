# THIS IS CONFIG DRIVEN UI, the data is changing continuosuly and coming from a source.
# And it returns a jsx

# For evry resturant, always give a unique key whenever you're looping something. BUT WHY??

### suppose we are having one one CARD but react does'nt know where to insert that card
# SO WHAT REACT DOES
### React just cleans the container and rerenders all the cards again 'COZ it did'nt know where to add that card

BUT
# If we give exact ID, SO react will render only that card AND NOT rest all other card
## SO ALWZ GIve that unique id