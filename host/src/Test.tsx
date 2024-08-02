import React from 'react';

const apiJobsRes = {
  status: 200,
  jobs: [
    {
      appId: 'Available Jobs',
      entries: [
        {
          text: 'Available App Id 1',
          jobList: [
            {
              text: 'Job 1',
            },
            {
              text: 'Job 2',
            },
            {
              text: 'Job 3',
            }
          ]
        }
      ]
    }, {
      appId: 'Pending Jobs',
      entries: [
        {
          text: 'Pending App Id 1',
          jobList: [
            {
              text: 'Job 1',
            },
            {
              text: 'Job 2',
            },
            {
              text: 'Job 3',
            }
          ]
        }
      ]
    }
  ]
}

// 
const sideMenuGroups = apiJobsRes.jobs.map(element => {
  return element.appId
});
console.log("side Menu Groups : ", sideMenuGroups);

const sideMenuItems = apiJobsRes.jobs.map(element => {
  return element.entries.map(item => {
    return item.text
  })
});
console.log("sideMenu items : ", sideMenuItems);

const Test = () => {
  return (
    <div>
      {
        sideMenuGroups.map((item, index) => {
          return <div key={index}>
            {item}
            {
              sideMenuItems.map((menuItem, index) => {
                return <div key={index} style={{ paddingLeft: "100px"}}>
                  <ul>
                    <li>
                      {menuItem}
                    </li>
                  </ul>
                </div>
              })
            } 
          </div>
        })
      }
    </div>
  );
}

export default Test;