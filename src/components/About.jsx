import React from 'react'

export default function About() {
var name="Vishal Sharma";

    return (
    <div className='container mx-4'>
        <div className='row'>
            <div className='col mx-4 my-2'>
                <img className='rounded-circle' src='https://media.licdn.com/dms/image/D4D03AQF7GpWeMMk6rQ/profile-displayphoto-shrink_200_200/0/1664336348364?e=1677110400&v=beta&t=0Gd315eyJZx0VcBZ1rLhiGDX8eeFgLBoUWiVexYoobE'/>
            </div>
            <div className='col' style={{paddingRight:"10%"}}>
               <h2>{name}</h2>
                <p>Pre-final Year Btech CSBS Student | 4⭐ at Codechef | Solved 900+ Questions on DSA | Leetcode 500+ | Web developer (MERN)</p>
                <div className='row mx-4'>
                <a className='col' href='https://www.linkedin.com/in/sharma39vishal/'><img alt='linkedIn' src='https://img.icons8.com/color/512/linkedin.png' width={"50px"}/>
                {/* <a style={{fontSize:"12px"}}>sharma39vishal</a> */}
                </a>
                <a className='col' href='https://github.com/sharma39vishal'><img alt='Github' src='https://img.icons8.com/ios-glyphs/512/github.png' width={"50px"}/>
                {/* <a style={{fontSize:"12px"}}>sharma39vishal</a> */}
                </a>
                <a className='col' href='https://leetcode.com/sharma39vishal/'><img alt='leetcode' src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png' width={"50px"}/>
                {/* <a style={{fontSize:"12px"}}>sharma39vishal</a> */}
                </a>
                    <a className='col' href='https://www.codechef.com/users/sharma39vishal'><img alt='Codechef' src='https://img.icons8.com/ios/512/codechef.png' width={"50px"}/>
                    {/* <a style={{fontSize:"12px"}}>sharma39vishal</a> */}
                    </a>
                    <a className='col' href='https://codeforces.com/profile/Visharma'><img alt='Codeforces' src='https://img.icons8.com/external-tal-revivo-filled-tal-revivo/512/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png' width={"50px"}/>
                    {/* <a style={{fontSize:"12px",color:"green"}}>Visharma</a> */}
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
