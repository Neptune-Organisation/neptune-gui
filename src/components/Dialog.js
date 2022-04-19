import { useState } from "react";
import {
  BasicButton,
  BasicCard,
  BasicForm,
  ImageGroup,
  Image,
  DropdownMenu,
  NavigationMenu,
  ColorPicker,
  Burger,
  Body,
  Toggler,
} from "neptunes-components";
import * as Data from "../data/dataIndex.js";
import * as Dialogs from "./dialogs/DialogsIndex.js";

export const Dialog = () => {
  const [settingDialog, setSettingDialog] = useState(" ");
  const singleCard = Data.cardGroupData.cards[0];
  const dialogData = Data.dialogData;

  return (
    <div className="dialog">
      <h2>Dialog</h2>
      <div className="dialog__option-container">
        <select
          name="components"
          id="component"
          onChange={(e) => setSettingDialog(e.target.value)}
        >
          <option value="button">Button</option>
          <option value="card">Card</option>
          <option value="form">Form</option>
          <option value="group">Group</option>
          <option value="media">Media</option>
          <option value="menu">Menu</option>
          <option value="navigation">Navigation</option>
          <option value="picker">Picker</option>
          <option value="shorthand">Shorthand</option>
          <option value="text">Text</option>
          <option value="toggler">Toggler</option>
        </select>

        <>
          {settingDialog === "button" && (
            <Dialogs.ButtonDialog data={dialogData.buttonList} />
          )}
          {settingDialog === "card" && (
            <Dialogs.CardDialog data={dialogData.cardList} />
          )}
          {settingDialog === "form" && (
            <Dialogs.FormDialog data={dialogData.formList} />
          )}
          {settingDialog === "group" && (
            <Dialogs.GroupDialog data={dialogData.groupList} />
          )}
          {settingDialog === "menu" && (
            <Dialogs.MenuDialog data={dialogData.menuList} />
          )}
          {settingDialog === "navigation" && (
            <Dialogs.NavigationDialog data={dialogData.navigationList} />
          )}
          {settingDialog === "media" && (
            <Dialogs.MediaDialog data={dialogData.mediaList} />
          )}
          {settingDialog === "picker" && (
            <Dialogs.PickerDialog data={dialogData.pickerList} />
          )}
          {settingDialog === "shorthand" && (
            <Dialogs.ShorthandDialog data={dialogData.shorthandList} />
          )}
          {settingDialog === "text" && (
            <Dialogs.TextDialog data={dialogData.textList} />
          )}
          {settingDialog === "toggler" && (
            <Dialogs.TogglerDialog data={dialogData.toggleList} />
          )}
        </>
      </div>
      <button className="dialog__button">Submit</button>
      {/* 
            DAS MUSS BEI "REPRESENTATION" SEIN

            <div className="">
                { settingDialog === "button" && <BasicButton data = {Data.basicButton} />}
                { settingDialog === "card" && <BasicCard data = {Data.singleCard} />}
                { settingDialog === "form" && <BasicForm data = {Data.formData} />}
                { settingDialog === "group" && <ImageGroup data = {Data.imageGroupData} />}
                { settingDialog === "menu" && <DropdownMenu data = {Data.dropdownMenu} />}
                { settingDialog === "navigation" && <NavigationMenu data = {Data.navbarData} />}
                { settingDialog === "picker" && <ColorPicker data = {Data.colorPickerData} />}
                { settingDialog === "shorthand" && <p>{settingDialog}</p>}
                { settingDialog === "text" && <Body data = {Data.textData} />}
                { settingDialog === "toggler" && <p>{settingDialog}</p>}
            </div>
             */}
    </div>
  );
};
