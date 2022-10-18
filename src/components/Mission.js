import React from 'react'

function Mission() {
  return (
    <section className = "container-outer mission-outer">
        <div className = "container-inner mission-inner">
            <h4>We Love Babies</h4>
            <p>
                Beautiful Beginnings offers finely crafted baby cribs as well as complete suites of nursery furniture, from traditional to contemporary. All the finest names in crib bedding and baby blankets are featured with
                thousands of fabrics available to customize your baby crib. We offer everything you need to personalize your baby nursery with one of a kind decor from distinctive lamps, clocks, wall hangings, picture frames and
                other decorative items.
            </p>
            <br />
            <p>
                To receive a gift from Beautiful Beginnings is a new mom's biggest wish. There are so many unique and beautiful baby gifts to select from including baby burp cloths, designer diaper bags, baby clothes and many
                baby toys. Whether you are looking for Christening gifts, a baby shower gift, a newborn gift or even a gift for a child's birthday, we have many baby gifts to choose from. Beautiful Beginnings is your one stop
                shop for all family and friends.
            </p>
            <div className = "mission-inner-signature">
                <img src= {require("../images/signature.svg").default} />
            </div>
        </div>
    </section>
  )
}

export default Mission