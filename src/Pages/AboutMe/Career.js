import { Chip, Divider } from '@mui/material'
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
          Staż w najbardziej innowacyjnej firmie w Raciborzu.<br /><br />
          Zacząłem od oprogramowania PLC (Siemens LOGO, sterujący sygnałami świetlnymi), poprzez panele HMI, programowanie stanowiska odczytującego grubość szyny w LabView, rysowanie 3D obiektu kamery a kończąc na napisaniu w Javie programu do odczytu logów produkcyjnych (następnie umieszczanie w odpowiednich tabelach, filtrowanie i sortowanie)."

        </TimelineElementContent>
      </TimelineElement>

      <TimelineElement year={2014}>
        <TimelineElementContent
          title="Inżynier"
          hashtag={['PLC', 'STEP7', 'Falownik']}
        >
          Praca inżynierska dotyczyła sterowania falownikiem poprzez PLC Siemensa.<br /><br />
          Moim zadaniem było:
          <ul className='taskList'>
            <li>Zaprogramowanie PLC S7-300 w celu sterowania falownikiem,</li>
            <li>Skonfigurowanie falownika Danfoss,</li>
            <li>Uruchomienie silnika asynchronicznego prądu przemiennego.</li>
          </ul>
        </TimelineElementContent>

        <Divider variant="middle" sx={{ mb: '10px' }} />

        <TimelineElementContent
          title="tester oprogramowania MES"
          hashtag={['MES', 'SimaticIT', 'Testing', 'QA', 'servicedesk']}
        >
          Manualne testowanie aplikacji MES dla fabryki farb.<br /><br />
          Moim zadaniem było:
          <ul className='taskList'>
            <li>Tworzenie scenariuszy testowych,</li>
            <li>Sprawdzenie działania interfejsu użytkownika,</li>
            <li>Sprawdzenie flow programu,</li>
            <li>Sprawdzenie zapisów w bazie danych,</li>
            <li>Złożenie raportów z testów dla klienta,</li>
            <li>Administrowanie systemem servicedesk.</li>
          </ul>
        </TimelineElementContent>
      </TimelineElement>

      <TimelineElement year={2015}>
        <TimelineElementContent
          title="Magister"
          desc=""
          hashtag={['Algorytmy', 'Matlab']}
        >
          Badanie algorytmów aktywnego tłumienia hałasów.<br /><br />
          Moim zadaniem było:
          <ul className='taskList'>
            <li>Ustawienie stanowiska badawczego,</li>
            <li>Zaprogramowanie procesora PPC MPC 8420,</li>
            <li>Sprawdzenie 5 wersji algorytmów LMS.</li>
          </ul>
        </TimelineElementContent>

        <Divider variant="middle" sx={{ mb: '10px' }} />

        <TimelineElementContent
          title="Asystent projektanta SCADA"
          hashtag={['SCADA', 'Asix', 'InTouch', 'WinCC']}
        >
          Programowanie systemów SCADA, głównie w przemyśle ciężkim (elektrownie, koksownie).<br /><br />
          Moim zadaniem było:
          <ul className='taskList'>
            <li>Programowanie interfejsu użytkownika,</li>
            <li>Połączenie z urzadzeniami za pomocą protokołów przemysłowych,</li>
            <li>Tworzenie grafik,</li>
            <li>Serwis systemów legacy,</li>
            <li>Uruchomienie systemu na terenie fabryki.</li>
          </ul>
        </TimelineElementContent>
      </TimelineElement>

      <TimelineElement year={2018}>
        <TimelineElementContent
          title="Projektant SCADA"
          hashtag={['SCADA', 'Raporty', 'IIoT', 'Receptury', 'Batch', 'Algorytmy']}
        >
          Projektant systemów SCADA wraz z doborem odpowiedniej technologii, software oraz hardware.<br /><br />
          Lista zadań zwiększyła się o:
          <ul className='taskList'>
            <li>Projektowanie nowych rozwiązań,</li>
            <li>Tworzenie raportów produkcyjnych,</li>
            <li>Komunikacja z urządzeniami IIoT,</li>
            <li>Wdrażanie systemów recepturowania,</li>
            <li>Pisanie algorytmów autonomicznie sterujących pracą urządzeń.</li>
          </ul>
        </TimelineElementContent>
      </TimelineElement>

      <TimelineElement year={2020}>
        <TimelineElementContent
          title="Konsultant systemów SCADA"
          hashtag={['SCADA', 'Szkolenia', 'Hardware', 'Architektura', 'Kontakt z klientem']}
        >
          Pomoc klientom w doborze rozwiązań dla systemów produkcyjnych, przeprowadzanie szkoleń z systemu SCADA firmy Askom oraz wsparcie współpracowników w programowaniu systemów SCADA.<br /><br />
          Lista zadań zwiększyła się o:
          <ul className='taskList'>
            <li>Prowadzenie szkoleń dla klientów oraz wewnętrznych,</li>
            <li>Konsultacje systemów SCADA,</li>
            <li>Pomoc w doborze sprzętu oraz rozwiazań programowych,</li>
            <li>Projektowanie architektury systemu produkcyjnego w fabryce.</li>
          </ul>
        </TimelineElementContent>
      </TimelineElement>

      <TimelineElement year={2021}>
        <TimelineElementContent
          title="Starszy inżynier serwisu"
          company="Siemens"
          hashtag={['SCADA', 'EnergyManagement', 'winCC', 'automotive']}
        >
          Półroczny kontrakt z liderem branży automatyki na wdrożenie systemu zarządzania energią w przedsiębiorstwie automotive.<br /><br />
          Moje obowiazki:
          <ul className='taskList'>
            <li>Wdrożenie oprogramowania Energy Manager Pro,</li>
            <li>Szkolenie współpacowników z systemów SCADA,</li>
            <li>Wyszukiwanie narzędzi umożliwiających predykcję zdarzeń.</li>
          </ul>
        </TimelineElementContent>
      </TimelineElement>

      <TimelineElement year={2022}>
        <TimelineElementContent
          title="Team leader"
          company="Peritus ACT"
          hashtag={['MES', 'JavaScript', 'Regex', 'Teamwork', 'Kontakt z klientem']}
        >
          Wdrożeniowiec oprogramowania MES. Lider zespołu, który wyszkolił 6 praktykantów na sprawnie działający zespół programistów. Gdy zespół się usamodzielnił, kierowałem zespołem DURR India.<br /><br />
          Moje obowiazki:
          <ul className='taskList'>
            <li>Wdrożenie oprogramowania MES: DURR DXQ,</li>
            <li>Kierowanie zespołem praktykantów,</li>
            <li>Kierowanie zespołem DURR India,</li>
            <li>Pisanie skryptów JavaScript i skomplikowanych Regex'ów,</li>
            <li>Rozwiązywanie sporów technicznych z klientem.</li>
          </ul>
        </TimelineElementContent>
      </TimelineElement>

      <TimelineElement year={2023}>
        <TimelineElementContent
          title="Frontend developer"
          company="Liga ZMG"
          hashtag={['React', 'JavaScript', 'Hobby']}
        >
          Nauka technologii webowych wraz z rozwijaniem stowarzyszenia.<br /><br />
          Obecnie zajmuję się:
          <ul className='taskList'>
            <li>Zgłębianiem wiedzy o technologiach webowych - kursy,</li>
            <li>Budowanie strony Stowarzyszenia,</li>
            <li>Zarządzanie stowarzyszeniem,</li>
            <li>Zarządzanie aktami prawnymi stowarzyszenia.</li>
          </ul>
        </TimelineElementContent>
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
      <div className="hashtags">
        {props.hashtag.map(x => (
          <Chip variant="outlined" size="small" label={'#' + x} />
        ))
        }
      </div>
    </>
  )
}