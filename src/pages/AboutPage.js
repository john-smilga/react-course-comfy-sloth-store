import React from 'react'
import styled from 'styled-components'
const AboutPage = () => {
  return (
    <Wrapper>
      <div className='content section'>
        <div className='title'>
          <h2>our story</h2>
          <div className='underline'></div>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
          delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
          Eos quod quisquam esse recusandae vitae neque dolore, obcaecati
          incidunt sequi blanditiis est exercitationem molestiae delectus saepe
          odio eligendi modi porro eaque in libero minus unde sapiente
          consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis
          nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate
          accusamus nesciunt totam vitae esse iste.
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  min-height: calc(100vh - 10rem);
  .content {
    padding-top: 8rem;
    p {
      line-height: 2;
      max-width: 45em;
      margin: 0 auto;
      margin-top: 2rem;
      color: var(--clr-grey-5);
    }
  }
`
export default AboutPage
