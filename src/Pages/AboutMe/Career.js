import { Chip } from '@mui/material'
import './Career.scss'

export default function Career() {
  return (
    <Timeline>

      <TimelineElement year={2006}>
        <TimelineElementContent
          title="Laureat olimpiady matematycznej"
          hashtag={['Algorytmy', 'Nauka']}
        >
          Początek zamiłowania do złożonych algorytmów.
        </TimelineElementContent>
      </TimelineElement>

      <TimelineElement year={2013}>
        <TimelineElementContent
          title="Stażysta Koltech"
          hashtag={['CAD', 'PLC', 'HMI', 'WinCC']}
        >
          Staż w najbardziej innowacyjnej firmie w Raciborzu.<br />
          Zacząłem od oprogramowania PLC (Siemens LOGO, sterujący sygnałami świetlnymi), poprzez panele HMI, programowanie stanowiska odczytującego grubość szyny w LabView, rysowanie 3D obiektu kamery a kończąc na napisaniu w Javie programu do odczytu logów produkcyjnych (następnie umieszczanie w odpowiednich tabelach, filtrowanie i sortowanie)."

        </TimelineElementContent>
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
          title="Asystent projektanta SCADA"
          desc="."
          hashtag={['SCADA', 'Asix']}
        />
      </TimelineElement>

      <TimelineElement year={2018}>
        <TimelineElementContent
          title="Projektant SCADA"
          desc="Badanie algorytmów aktywnego tłumienia hałasów."
          hashtag={['Algorytmy', 'Matlab']}
        />
      </TimelineElement>

      <TimelineElement year={2020}>
        <TimelineElementContent
          title="Specjalista ds. Marketingu"
          desc="Badanie algorytmów aktywnego tłumienia hałasów."
          hashtag={['Algorytmy', 'Matlab']}
        />
      </TimelineElement>

      <TimelineElement year={2021}>
        <TimelineElementContent
          title="Siemens"
          desc="Badanie algorytmów aktywnego tłumienia hałasów."
          hashtag={['Algorytmy', 'Matlab']}
        />
      </TimelineElement>

      <TimelineElement year={2022}>
        <TimelineElementContent
          title="Peritus"
          desc="Badanie algorytmów aktywnego tłumienia hałasów."
          hashtag={['Algorytmy', 'Matlab']}
        />
      </TimelineElement>

      <TimelineElement year={2023}>
        <TimelineElementContent
          title="Web developer"
          desc="Badanie algorytmów aktywnego tłumienia hałasów."
          hashtag={['React', 'Matlab']}
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
      <div className="description">
        {props.children}
      </div>
      <p>
        {props.hashtag.map(x => (
          <Chip variant="outlined" size="small" label={'#' + x} />
        ))
        }
      </p>
    </>
  )
}