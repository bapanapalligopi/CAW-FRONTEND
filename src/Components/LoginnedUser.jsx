// import React, { useEffect } from "react";
import styles from "../Styles/profile.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import friendslist from "../friendslist.json";
import examplemessages from "../examplemessages.json";
import LookProfileContainer from "./LookProfileContainer";
import UserPhotoAndName from "./UserPhotoAndName";
import UserActions from "./UserActions";
import SearchFriends from "./SearchFriends";
import ScrollViewOfFriends from "./ScrollViewOfFriends";
import DefaultChat from "./DefaultChat";
import SelectedFriendProfile from "./SelectedFriendProfile";
import SelectedFriendAndCurrentUserChatInScrollView from "./SelectedFriendAndCurrentUserChatInScrollView";
import MessageSendInputAndButton from "./MessageSendInputAndButton";
export default function LoginnedUser({
  IsLoggin,
  setIsLoggin,
  currentUsername,
}) {
  /*allfriends of current user is null initially */
  const [allfriends, setallfriends] = useState([]);
  const [help, sethelp] = useState(false);
  /*current friend*/
  const [currentFriend, setcurrentFriend] = useState("");
  const [selectedFriend, setselectedFriend] = useState(false);
  const [searchInput, setsearchInput] = useState(null);
  /* message related constants */
  const [examplemessageslist, setexamplemessageslist] =
    useState(examplemessages);
  const [sendMessage, setSendMessage] = useState(false);
  const [userSendMessageContent, setuserSendMessageContenet] = useState("");
  const [isUserSendTheMessage, setisUserSendTheMessage] = useState(false);
  const [currentSendMessagContent, setcurrentSendMessagContent] = useState("");
  /* add friend related constants */
  const [SearchInputForFriendUsername, setSearchInputForFriendUsername] =
    useState("");
  const [IsSearchInputForSearchButton, setIsSearchInputForSearchButton] =
    useState(false);
  const [searchFriendInputResults, setsearchFriendInputResults] = useState("");
  const [searchFriendInputResultsData, setsearchFriendInputResultsData] =
    useState(null);

  const [
    isClearSearchresultsForAddFriend,
    setisClearSearchresultsForAddFriend,
  ] = useState(false);

  const [messages, setMessages] = useState([]);
  const [messageFromFriend, setMessagesFriend] = useState([]);
  const [allMessages, setallMessages] = useState([]);
  /*  friends of current user */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://chatanywhere-0evk.onrender.com/myfriends?username=${currentUsername}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          /*modify the all friends */
          setallfriends(data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  /*for update friends after add a friend*/
  const updatedFriendsList = async () => {
    try {
      const response = await fetch(
        `https://chatanywhere-0evk.onrender.com/myfriends?username=${currentUsername}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        /*modify the all friends */
        setallfriends(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const HandleLogOut = () => {
    setIsLoggin(false);
  };
  const HandleHelp = () => {
    setselectedFriend(false);
    sethelp(true);
  };
  /* current select a friend for chat*/
  const HandleSelectedUSer = async (user) => {
    /*set friend name*/
    console.log("user friend=========:" + user);
    setcurrentFriend(user);
    setselectedFriend(true);

    console.log("currentUser==>" + currentUsername);
    const getMessages = async (currentUsername, user) => {
      const response = await fetch(
        `https://chatanywhere-0evk.onrender.com/getMessages?user1=${currentUsername}&user2=${user}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("messages in api call:");
        {
          data.map((msg) => {
            console.log(msg.createdOn + msg.message);
          });
        }
        setMessages(data);
        return data;
        // allMessages([...allMessages, ...data]);
      } else {
        const messages = await response.json();
        console.log("error while getting message");
        console.log("errors are:" + messages);
      }
    };

    const sender = await getMessages(currentUsername, user);
    const receiver = await getMessages(user, currentUsername);
    setallMessages([...sender, ...receiver]);
  };
  const handleSearch = (e) => {
    setsearchInput(e.target.value);
    console.log("serach input is: " + searchInput);
    const filteredFriends = friendslist.filter(
      (friend) => friend.username === searchInput
    );
    console.log("filterred friend" + filteredFriends);
    setallfriends(filteredFriends);
    console.log("all friends");
    allfriends.map((friend) => {
      console.log(friend.username);
    });
  };
  const handleMessageTransaction = async () => {
    const resonse = await fetch(
      `https://chatanywhere-0evk.onrender.com/send?sender=${currentUsername}&receiver=${currentFriend}&message=${userSendMessageContent}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (resonse.ok) {
      setisUserSendTheMessage(true);
      setcurrentSendMessagContent(userSendMessageContent);
      HandleSelectedUSer(currentFriend);
      //send notificatio via mail for alert of new message
      const mailRequest = {
        to: currentFriend,
        subject: "Chat AnyWhere",
        text: "Hey you new message from " + currentUsername,
      };
      const mailresponse = await fetch(
        `https://chatanywhere-0evk.onrender.com/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mailRequest),
        }
      );
    }
  };

  const handleAddFriendButton = async () => {
    // Update friends list of cuurent user
    const response = await fetch(
      `https://chatanywhere-0evk.onrender.com/addfriend?creator=${currentUsername}&receiver=${searchFriendInputResultsData.username}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status == 500 || response.status == 401) {
      alert("Oops!Failure while adding friend!!");
    }
    if (response.ok) {
      alert("successfully added.");
      updatedFriendsList();
    }
  };
  /*close the add friend menu*/
  const handleCloseButtonOfCanvasInHeader = () => {
    setSearchInputForFriendUsername("");
    setsearchFriendInputResults(null);
    setsearchFriendInputResultsData(null);
  };

  /* serach user for making as your friend*/
  const handleSearchInputForFriendClicked = async () => {
    const response = await fetch(
      `https://chatanywhere-0evk.onrender.com/get/user?username=${
        SearchInputForFriendUsername + "@gmail.com"
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status == 401) {
      setsearchFriendInputResults(
        "it seems like your friend doesn't have an Account!!"
      );
    }
    if (response.ok) {
      const response = await fetch(
        `https://chatanywhere-0evk.onrender.com/friendsarenot?user1=${currentUsername}&user2=${
          SearchInputForFriendUsername + "@gmail.com"
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        //checking already friends are not
        const result = await response.json();
        if (result == true) {
          setsearchFriendInputResults("Already friends!!");
        } else {
          setsearchFriendInputResults("The friend details are:");
          setsearchFriendInputResultsData({
            username: SearchInputForFriendUsername + "@gmail.com",
          });
          setSearchInputForFriendUsername("");
        }
      }
    }
  };
  /* clear button in add friend  offcanvas */
  const handleClearOffCanvas = () => {
    setisClearSearchresultsForAddFriend(true);
    console.log("clear clicked");
    setsearchFriendInputResults(null);
    setsearchFriendInputResultsData(null);
  };
  /* tool tip initialization */
  useEffect(() => {
    // Initialize tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltips = Array.from(tooltipTriggerList).map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Cleanup function
    //when log out button clicked the tool tip still display i=on login page to avoid
    return () => {
      tooltips.forEach((tooltip) => {
        tooltip.dispose(); // Destroy tooltips when unmounting component
      });
    };
  }, []);

  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className={`container-fluid ${styles.profileContainer}`}>
        <div className={styles.friendsContainer}>
          {/* adding profile for user and user actions */}
          <div className={styles.myprofileSetting}>
            {/* userPhotoandName */}
            <UserPhotoAndName currentUsername={currentUsername} />
            {/* LookProfileContainer */}
            <LookProfileContainer
              currentUsername={currentUsername}
              handleCloseButtonOfCanvasInHeader={
                handleCloseButtonOfCanvasInHeader
              }
            />
            {/* user actions like help,addfriend,logout */}
            <UserActions
              handleCloseButtonOfCanvasInHeader={
                handleCloseButtonOfCanvasInHeader
              }
              SearchInputForFriendUsername={SearchInputForFriendUsername}
              setSearchInputForFriendUsername={setSearchInputForFriendUsername}
              handleSearchInputForFriendClicked={
                handleSearchInputForFriendClicked
              }
              searchFriendInputResults={searchFriendInputResults}
              searchFriendInputResultsData={searchFriendInputResultsData}
              handleAddFriendButton={handleAddFriendButton}
              IsSearchInputForSearchButton={IsSearchInputForSearchButton}
              handleClearOffCanvas={handleClearOffCanvas}
              HandleHelp={HandleHelp}
              HandleLogOut={HandleLogOut}
            />
          </div>
          {/**adding freinds list and serach bar */}
          <div>
            <SearchFriends handleSearch={handleSearch} />
            <ScrollViewOfFriends
              help={help}
              allfriends={allfriends}
              HandleSelectedUSer={HandleSelectedUSer}
              sethelp={sethelp}
            />
          </div>
        </div>
        <div className={styles.chatContainer}>
          {!selectedFriend & !help ? (
            <DefaultChat />
          ) : (
            <div className={styles.currentFriendChatContainer}>
              <SelectedFriendProfile currentFriend={currentFriend} />
              <SelectedFriendAndCurrentUserChatInScrollView
                allMessages={allMessages}
                currentUsername={currentUsername}
              />
              <MessageSendInputAndButton
                userSendMessageContent={userSendMessageContent}
                sendMessage={sendMessage}
                setSendMessage={setSendMessage}
                setuserSendMessageContenet={setuserSendMessageContenet}
                handleMessageTransaction={handleMessageTransaction}
              />
            </div>
          )}
        </div>
      </div>
      <div className={styles.developerdetails}>
        &copy; All rights are reserved by Chat AnyWhere. Developed by Gopi
        Bapanapalli. You can reach me via chatanywherenotify@gmail.com
      </div>
    </div>
  );
}
