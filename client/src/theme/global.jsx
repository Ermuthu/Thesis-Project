import { injectGlobal } from "styled-components";
import { Green } from "./colors";

injectGlobal`

body {  
display: flex;
flex-direction: column;
background-color: black;
color: white;
}

li {
list-style-type: none;
}

p {
    color: white;
}

a {
text-decoration: none;
color: ${Green};
}

a:hover {
     text-decoration: none; 
     cursor: pointer;  
     color: white;
}
`;
