import React from 'react';
import {render,screen} from '@testing-library/react'
import SchoolDetails from './SchoolDetails';

describe('School Details Component',()=>{
  it('renders school details correctly',()=>{
    const mockSchool = {
      school_name:'School 1',
      overview_paragraph: ' This is a brief overview',
      neighbourhood:'Some neighbourhood',
      location:'Some location'
    }; 
    render(<SchoolDetails school={mockSchool}/>);
    expect(screen.getByText(mockSchool?.school_name)).toBeInTheDocument();
  
    expect(screen.getByText(mockSchool?.neighbourhood)).toBeInTheDocument();
    expect(screen.getByText(mockSchool?.location)).toBeInTheDocument();
  })

  it('renders empty content for missing school properties',()=>{
    const mockSchool = {
      school_name:'School 1'
    };
    render(<SchoolDetails school={mockSchool}/>);
    expect(screen.getByText(mockSchool?.school_name)).toBeInTheDocument();
  })
})