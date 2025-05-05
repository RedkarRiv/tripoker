import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import _get from 'lodash/get';
import { useSocket } from '../context/SocketContext.jsx';

const Room = ({ inheritClass }) => {
  const { t } = useTranslation('room')
  const userName = useSelector((state) => _get(state, "auth.user.alias"));
  const isMobile = useSelector((state) => _get(state, "viewport.isMobile"));
  const [messages, setMessages] = useState([]); // Estado para almacenar los mensajes
  const [messageInput, setMessageInput] = useState(""); // Estado para el texto del mensaje
  const [chatVisible, setChatVisible] = useState(false);
  const [rangeValue, setRangeValue] = useState(500);
  const socket = useSocket()
  const endOfMessagesRef = useRef(null);

  // Manejar la conexión y recepción de mensajes
  useEffect(() => {
    socket.on('chatMessage', (msg) => {
      // Agregar el nuevo mensaje al estado de mensajes
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chatMessage'); // Limpiar el evento cuando el componente se desmonte
    };
  }, [socket]);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Enviar el mensaje al servidor
      socket.emit('chatMessage', { user: userName, message: messageInput });
      setMessageInput(""); // Limpiar el input después de enviar el mensaje
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handClass = 'h-12 w-8 md:h-24 md:w-14 bg-white rounded'
  const playerHandClass = 'h-20 w-12 md:h-28 md:w-16 bg-white rounded'
  return (
    <div className={`${inheritClass} w-full min-h-screen h-screen bg-secondaryColor flex items-center justify-start flex-col md:pb-8 md:pt-0 overflow-x-hidden relative`}>
      <span
        onClick={() => setChatVisible((prev) => !prev)}
        className={`text-white px-2 rounded self-end md:self-auto mb-2 absolute cursor-pointer right-4 top-5 z-10  ${chatVisible ? 'bg-black' : 'bg-fontPrimaryColor'}`}
      >
        💬
      </span>
      <div className="w-full h-full lg:max-w-[75rem] flex flex-col md:px-24 md:pt-12 justify-between items-center gap-2">
        <div className="w-full h-full flex flex-col">
          <div id="players" className="w-full h-fit flex bg-red-500 p-1 gap-1">
            <div className="w-1/5 h-20 bg-black flex md:flex-row flex-col justify-center items-center md:p-2 p-1">
              <div className="aspect-square md:h-full md:w-auto h-8 w-8 rounded-full bg-red-400"></div>
              <div className="flex-1 flex flex-col md:justify-center justify-end items-start md:ml-4 text-center text-xs w-full px-1">
                <div className="text-white">Nombre</div>
                <div className="text-white">Monedas</div>
              </div>
            </div>
            <div className="w-1/5 h-20 bg-black flex md:flex-row flex-col justify-center items-center md:p-2 p-1">
              <div className="aspect-square md:h-full md:w-auto h-8 w-8 rounded-full bg-red-400"></div>
              <div className="flex-1 flex flex-col md:justify-center justify-end items-start md:ml-4 text-center text-xs w-full px-1">
                <div className="text-white">Nombre</div>
                <div className="text-white">Monedas</div>
              </div>
            </div>
            <div className="w-1/5 h-20 bg-black flex md:flex-row flex-col justify-center items-center md:p-2 p-1">
              <div className="aspect-square md:h-full md:w-auto h-8 w-8 rounded-full bg-red-400"></div>
              <div className="flex-1 flex flex-col md:justify-center justify-end items-start md:ml-4 text-center text-xs w-full px-1">
                <div className="text-white">Nombre</div>
                <div className="text-white">Monedas</div>
              </div>
            </div>
            <div className="w-1/5 h-20 bg-black flex md:flex-row flex-col justify-center items-center md:p-2 p-1">
              <div className="aspect-square md:h-full md:w-auto h-8 w-8 rounded-full bg-red-400"></div>
              <div className="flex-1 flex flex-col md:justify-center justify-end items-start md:ml-4 text-center text-xs w-full px-1">
                <div className="text-white">Nombre</div>
                <div className="text-white">Monedas</div>
              </div>
            </div>
            <div className="w-1/5 h-20 bg-black flex md:flex-row flex-col justify-center items-center md:p-2 p-1">
              <div className="aspect-square md:h-full md:w-auto h-8 w-8 rounded-full bg-red-400"></div>
              <div className="flex-1 flex flex-col md:justify-center justify-end items-start md:ml-4 text-center text-xs w-full px-1">
                <div className="text-white">Nombre</div>
                <div className="text-white">Monedas</div>
              </div>
            </div>
          </div>
          {isMobile &&
            <div id="mobileCheck" className="w-full h-full max-h-[30vh] flex bg-yellow-500 gap-1 justify-between p-2 my-2">
              <div className="w-1/5 h-12 bg-black flex justify-center items-center">
                <div className="aspect-square md:h-full md:w-auto h-8 w-8 rounded-full bg-red-400"></div>
              </div>
              <div className="w-full h-full bg-white flex p-1 gap-1 mx-3">
                <div className="w-full h-full bg-slate-200"></div>
                <div className="w-full h-full bg-slate-200"></div>
              </div>
              <div className="w-1/5 h-12 bg-black flex justify-center items-center">
                <div className="aspect-square md:h-full md:w-auto h-8 w-8 rounded-full bg-red-400"></div>
              </div>
            </div>}
          <div id="table" className="w-full h-fit max-w-[100vw] flex items-start bg-red-500 md:p-2 p-1 md:gap-4 md:my-auto mb-3">
            {!isMobile && <div className="md:w-full flex-1 w-0 h-full flex flex-col">
              <div className="w-full h-20 bg-black flex justify-center items-center p-4">
                <div className="aspect-square md:h-full md:w-auto rounded-full bg-red-400"></div>
                <div className="flex-1 flex flex-col md:justify-center justify-end items-start md:ml-4 text-center text-xs w-full px-1">
                  <div className="text-white">Nombre</div>
                  <div className="text-white">Monedas</div>
                </div>
              </div>
              <div className="w-full flex-1 bg-slate-500"></div>
            </div>}
            <div className="w-full flex flex-col gap-3">
              <div id="flop" className="flex md:gap-3 gap-2 justify-center">
                <div className="flex justify-center gap-1 w-full">
                  <div className={`${handClass} bg-green-600`}></div>
                  <div className={`${handClass} bg-green-600`}></div>
                </div>
                <div className="w-fit flex gap-1 ">
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                </div>
                <div className="flex justify-center gap-1 w-full">
                  <div className={`${handClass} bg-blue-600`}></div>
                  <div className={`${handClass} bg-blue-600`}></div>
                </div>
              </div>
              <div id="flop2" className="flex md:gap-3 gap-2 justify-center">
                <div className="flex justify-center gap-1 w-full">
                  <div className={`${handClass} bg-green-600`}></div>
                  <div className={`${handClass} bg-green-600`}></div>
                </div>
                <div className="w-fit flex gap-1 ">
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                </div>
                <div className="flex justify-center gap-1 w-full">
                  <div className={`${handClass} bg-blue-600`}></div>
                  <div className={`${handClass} bg-blue-600`}></div>
                </div>
              </div>
              <div id="flop3" className="flex md:gap-3 gap-2 justify-center">
                <div className="flex justify-center gap-1 w-full">
                  <div className={`${handClass} bg-green-600`}></div>
                  <div className={`${handClass} bg-green-600`}></div>
                </div>
                <div className="w-fit flex gap-1 ">
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                  <div className={`${handClass}`}></div>
                </div>
                <div className="flex justify-center gap-1 w-full">
                  <div className={`${handClass} bg-blue-600`}></div>
                  <div className={`${handClass} bg-blue-600`}></div>
                </div>
              </div>
            </div>
            {!isMobile && <div className="md:w-full  flex-1 w-0 h-full flex flex-col">
              <div className="w-full h-20 bg-black flex justify-center items-center p-4">
                <div className="aspect-square md:h-full md:w-auto rounded-full bg-red-400"></div>
                <div className="flex-1 flex flex-col md:justify-center justify-end items-start md:ml-4 text-center text-xs w-full px-1">
                  <div className="text-white">Nombre</div>
                  <div className="text-white">Monedas</div>
                </div>
              </div>
              <div className="w-full flex-1 bg-slate-500"></div>
            </div>}

          </div>
        </div>

        <div id="player" className="w-full h-fit flex flex-col md:flex-row items-center bg-red-500 relative">
          <div id="profile" className="md:w-1/5 w-fit md:h-20 h-24 bg-black md:absolute md:left-0">
            <div className="w-full h-20 bg-black flex justify-center items-center md:p-4 p-2">
              <div className="aspect-square md:h-full md:w-auto h-12 w-12 rounded-full bg-red-400"></div>
              <div className="flex-1 flex flex-col md:justify-center justify-end items-start md:ml-4 ml-2 text-center text-xs w-full px-1">
                <div className="text-white">Nombre</div>
                <div className="text-white">Monedas</div>
              </div>
            </div>
          </div>
          <div id="hand" className="w-full h-full flex bg-yellow-600 md:justify-center justify-around md:gap-2">
            <div id="play1" className="flex items-center gap-1 md:gap-3 p-1 bg-blue-600">
              <div className={`${playerHandClass}`}></div>
              <div className={`${playerHandClass}`}></div>
            </div>
            <div id="play2" className="flex items-center gap-1 md:gap-3 p-1 bg-green-600">
              <div className={`${playerHandClass}`}></div>
              <div className={`${playerHandClass}`}></div>
            </div>
            <div id="play3" className="flex items-center gap-1 md:gap-3 p-1 bg-red-600">
              <div className={`${playerHandClass}`}></div>
              <div className={`${playerHandClass}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div id="chat" className={`min-w-64 md:w-1/4 w-full h-[100vh] px-2 rounded flex flex-col transition-all duration-500 ease-in-out absolute md:py-4 right-0 ${chatVisible ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col flex-1  bg-gray-200 rounded overflow-hidden">
            <div className="flex-1 overflow-y-auto max-h-[15dvh] md:max-h-full">
              {messages.map((msg, index) => {
                const isOwnMessage = msg.user === userName;
                return (
                  <div
                    key={index}
                    className={`py-1 px-2 my-1 rounded w-full break-words text-xs ${isOwnMessage
                      ? 'bg-blue-300 text-black self-end text-right'
                      : 'bg-gray-300 text-black self-start'
                      }`}
                  >
                    {!isOwnMessage && <strong className="block">{msg.user}:</strong>}
                    {msg.message}
                  </div>
                );
              })}
              <div ref={endOfMessagesRef} />
            </div>
          </div>
          {chatVisible &&
            <div className="md:h-20 flex justify-around items-center pt-2 relative ">
              <textarea
                type="text"
                name="message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message"
                className="h-full w-full text-xs text-start rounded p-2 resize-none"
              />
              <button onClick={handleSendMessage}
                className="bg-emerald-600 hover:bg-emerald-800 cursor-pointer px-1 rounded text-white absolute right-0 bottom-0 mr-3 mb-3">➤</button>
            </div>
          }
        </div>
    </div>
  );
};

export default Room