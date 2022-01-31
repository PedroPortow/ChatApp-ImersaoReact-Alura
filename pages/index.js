import { Box, Button, Text, TextField, Image} from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import appConfig from '../config.json';



  


function Titulo(props){
    const Tag = props.tag || 'h1';
    return(
        <>
           
           <Tag>{props.children}</Tag>
            <style jsx>{`
               ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['100']};
                    font-size: 24px;
                    font-weight: 600;
                }
                `}
            </style>
        </>
    );
}


// function HomePage() {
//     return (
//     <div>
       
//         <Titulo tag="h2">Boas vindas de volta</Titulo>
//         <h2>Discord - Projeto Imersão React</h2>
       
//     </div>
//     )
//   }
  
//   export default HomePage

export default function PaginaInicial() {
  const [username, setUsername] = React.useState('');
  const router = useRouter();

  return (
    <>
    
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.neutrals[400],
          backgroundImage: 'url(https://images.unsplash.com/photo-1556379092-dca659792591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
           
            backdropFilter: 'blur( 4px )',
            webkitBackdropFilter: 'blur( 4px )',
            backgroundColor: appConfig.theme.colors.neutrals[500],
            background: 'rgba( 255, 255, 255, 0.25 )',
            border: '1px solid rgba( 255, 255, 255, 0.18 )'
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function(e){
              e.preventDefault();
              console.log('subemeteu o form');
              router.push(`/chat?username=${username}`);
              // window.location.href ="/chat";
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            {/* <input 
              type="text"
              value={username}
              onChange={function Handler(event){
                console.log('usuário digitou', event.target.value);
                //Onde ta o valor?
                const valor = event.target.value;
                //Trocar o valor da variável
                //Atrave´s do react e avise quem precisa
                setUsername(valor);
                

              }}
            />             */}
            <TextField
              value={username}
              onChange={function Handler(event){
                // console.log('usuário digitou', event.target.value);
                //Onde ta o valor?
                const valor = event.target.value;
                //Trocar o valor da variável
                //Atrave´s do react e avise quem precisa
                setUsername(valor);
                

              }}
        
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`${username.length > 2 ? `https://github.com/${username}.png` : 'https://cdn-icons-png.flaticon.com/512/17/17004.png'}`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username.length > 2  ? username : null}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}