import './Career.scss'

export default function Career() {
  return (
    <Timeline>

      <TimelineElement year={2006}>
        <TimelineElementContent 
        title="Laureat olimpiady matematycznej" 
        desc="Początek zamiłowania do złożonych algorytmów." 
        hashtag={['Algorytmy', 'Nauka']} 
        />
      </TimelineElement>

      <TimelineElement year={2014}>
        <TimelineElementContent 
        title="Inżynier" 
        desc="Praca dotycząca programowania PLC i sterowania falownikiem." 
        hashtag={['PLC', 'STEP7', 'Falownik']} 
        />
        <TimelineElementContent 
        title="Stażysta działu MES" 
        desc="Manualne testowanie aplikacji MES." 
        hashtag={['MES', 'SimaticIT', 'Testing', 'QA']} 
        />
      </TimelineElement>
      
      <TimelineElement year={2015}>
        <TimelineElementContent 
        title="Magister" 
        desc="Badanie algorytmów aktywnego tłumienia hałasów." 
        hashtag={['Algorytmy', 'Matlab']} 
        />
        <TimelineElementContent 
        title="Projektant SCADA" 
        desc="." 
        hashtag={['SCADA', 'Asix']} 
        />
      </TimelineElement>
    </Timeline>
  )
}

function Timeline(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}
function TimelineElement(props) {
  return (
    <div className="timeline">
      <div className="timeline-content">
        <div className="timeline-year">{props.year}</div>
        {props.children}
      </div>
    </div>
  )
}
function TimelineElementContent(props) {
  return (
    <>
      <h3 className="title">{props.title}</h3>
      <p className="description">
        {props.desc}
      </p>
      <p className="description">
        {props.hashtag.map(x => (
          <div>{x}</div>
        ))
        }
      </p>
    </>
  )
}