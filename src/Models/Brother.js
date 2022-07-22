import React from "react"

class Brother extends React.Component{
    static numberOfBrothers = 0;
    constructor(name, clas, role, schoolYear, placeOfBirth)
    {
      super();
      this.name = name;
      this.clas = clas;
      Brother.numberOfBrothers++;
      this.key = Brother.numberOfBrothers-1;
      this.img = "";
      this.role = role;
      this.schoolYear = schoolYear;
      this.pob = placeOfBirth;
    
    }
  }

  export default Brother;