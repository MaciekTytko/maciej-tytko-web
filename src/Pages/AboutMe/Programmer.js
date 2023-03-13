import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import Hashtag from "../../Components/Hashtags/Hashtag";
import logo_cpp from "../../assets/images/logo_Cpp.svg";
import logo_cs from "../../assets/images/logo_Cs.svg";
import logo_cg from "../../assets/images/logo_cg.jpg";
import logo_js from "../../assets/images/logo_JS.svg";
import logo_labview from "../../assets/images/logo_LabView.svg";
import logo_react from "../../assets/images/logo_React.svg";
import logo_sql from "../../assets/images/logo_SQL.svg";
import './Programmer.scss'


export default function Programmer() {

  // C# - skrypty + stacja testowania pomp
  // C++ + VCL - harmonogram koksowni
  // JS - skrypty w MES
  // JS + React - ta strona
  // SQL + MS Reporting services - raporty środowiskowe
  // Dodatkowo - codingame {/* dodać certyfikaty i ikonki */}
  // II miejsce na mistrzostwach Polski w LabView - kategoria pytania do publiczności

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', mt: '1rem', mb: '1rem' }}>

      <ProjectCard title="Strona Ligi ZMG"
        hashtag={['React', 'JavaScript']}
        image={logo_react}
        alt="react"
      >
        <Typography variant="body2" component="div" textAlign="left">
          Strona służąca do zapisów na punkty programu odbywające się podczas Gliwickich Spotkań RPG.
          Front zbudowany jest na Reakcie, ze względu na popularność tej biblioteki.
          Backend zapewniony jest przez firebase. Korzystam zarówno z realtime database oraz autoryzacji użytkowników.
        </Typography>
      </ProjectCard>

      <ProjectCard title="Skrypty JS"
        hashtag={['JS', 'JavaScript']}
        image={logo_js}
        alt="javascript"
      >
        <Typography variant="body2" component="div" textAlign="left">
          JavaScript wykorzystywałem w pisaniu skryptów przetwarzających dane dla systemu MES.<br />
        </Typography>
      </ProjectCard>

      <ProjectCard title="Skrypty SCADA"
        hashtag={['C#', 'Algorytmy', 'LINQ']}
        image={logo_cs}
        alt="C#"
      >
        <Typography variant="body2" component="div" textAlign="left">
          C# służył mi jako język do pisania skryptów wizualizacji danych w oprogramowaniu Asix.evo.
          Największym wyzwaniem były skrypty wyznaczające estymacje pracy pomp wysokociśnieniowych na podstawie kilku punktów pomiarowych oraz zasad mechaniki płynów.
        </Typography>
      </ProjectCard>

      <ProjectCard title="Raporty SQL"
        hashtag={['SQL', 'MS SQL', 'Reporting services']}
        image={logo_sql}
        alt="sql"
      >
        <Typography variant="body2" component="div" textAlign="left">
          Raporty były przygotowywane w środowisku MS SQL Reporting services.
          Dzięki temu zdobyłem doświadczenie w pisaniu zapytań SQL, tworzeniu procedur oraz funkcji.
        </Typography>
      </ProjectCard>

      <ProjectCard title="Harmonogram pracy koksowni"
        hashtag={['C++', 'VCL', 'MVC']}
        image={logo_cpp}
        alt="C++"
      >
        <Typography variant="body2" component="div" textAlign="left">
          Byłem liderem projektu, który polegał na modernizacji istniejącej aplikacji.
          Musieliśmy przepisać większość programu od nowa. Rozbiliśmy również monoblok kodu na MVC.<br />
          Skład: 4 programistów<br />
          Czas projektu: 7 miesięcy
        </Typography>
      </ProjectCard>

      <ProjectCard title="Codingame"
        hashtag={['JS', 'C#', 'Algorytmy']}
        image={logo_cg}
        alt="codingame"
      >
        <Typography variant="body2" component="div" textAlign="left">
          Biorę udział w wyzwaniach Codingame.
          Jest to platforma umożliwiająca rozwiązywanie zadań wymagających znajomości algorytmów i programowania botów.<br />
          Zapraszam na mój profil <Link href="https://www.codingame.com/profile/3464512d18ee3c6510111aae8bb9f3886965771">Codingame</Link>.
        </Typography>
      </ProjectCard>

      <ProjectCard title="Wygrany quiz LabView"
        hashtag={['LabView']}
        image={logo_labview}
        alt="labview"
      >
        <Typography variant="body2" component="div" textAlign="left">
          Oprócz programowania strukturalnego znam również inne paradygmaty.<br />
          Podczas 3 mistrzostw Polski w LabView (język wizualny) zdobyłem 2 miejsce podczas Quizu.
        </Typography>
      </ProjectCard>

    </Box>
  )
}

function ProjectCard(props) {
  return (
    <Card sx={{ width: 450, display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{ p: '20px' }}
      >
        <img src={props.image} alt={props.alt} width={80} height={80} />
      </Box>
      <Box sx={{ height: '100%' }}>
        <CardContent >
          <Typography component="div" variant="h5" textAlign="left" sx={{ mb: '5px' }}>
            {props.title}
          </Typography>
          {props.children}
          <div className="hashtags">
            {props.hashtag.map(x => (
              <Hashtag tag={x} />
            ))}
          </div>
        </CardContent>
      </Box>
    </Card>
  )
}