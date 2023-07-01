# MERN Stack GeoJSON workshop

### GOALS
- Creating a MERN stack CRUD application 
- Exploring MongoDB’s geospatial queries
- Using react-leaflet to create dynamic maps

### SPECIFICATIONS
This is a  real estate application where users can search for properties based on their desired location. Implement mongoose's geo location search to enable users to find properties within a specific area or proximity to certain landmarks.


all kind of **CRUD** operation are possible within the server: .  
- post "/" to create a new property
- get "/near-by" will return all the properties near by, by asking for the user browser geolocation.
- get "/" will return all the properties in the collection
- get "/:d" will return the selected property
- put "/:d" will update the selected property
- delete "/:d" will dlete the selected property

in the frontend the user position is gotten from the browser and send it as a request in the query parameter.
through this and a radius selection the user may find properties nearby.





