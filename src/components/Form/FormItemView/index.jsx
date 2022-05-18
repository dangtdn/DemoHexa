import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

function FormItemView(props) {

    const {renderItem} = props;

    const {dataFieldsLayout} = useSelector(state => state.DatastoresReducer);
    const [arrRow, setArrRow] = useState();
    
    useEffect(() => {
      if (dataFieldsLayout.field_layout) {
        let arr = [];
        Object.values(dataFieldsLayout.field_layout).forEach((item) => {
            arr.push(item.row);
        });
        let myArrayWithNoDuplicates = arr.reduce(function (accumulator, element) {
          if (accumulator.indexOf(element) === -1) {
            accumulator.push(element)
          }
          return accumulator
        }, []);

        let rows = [];
        myArrayWithNoDuplicates.forEach(item => {
          let arrItem = [];
          Object.values(dataFieldsLayout.field_layout).forEach((it) => {
            if (item === it.row) {
              arrItem.push(it);
            }
          });
          rows.push(arrItem);
        })
        console.log('row: ',rows)
        setArrRow(rows);
      }
    },[dataFieldsLayout]);

    useEffect(() => {
      if (arrRow) {
        console.log(arrRow)
      }
    }, [arrRow]);

    const renderInput = () => {
      if (arrRow) {
        arrRow?.map((item, index) => {
          return (
            <Row key={index} md="2" className="pb-5">
              {item?.forEach((item2, idx) => {
                Object.values(dataFieldsLayout.fields)?.map(item3 => {
                  if (item2.display_id === item3.display_id) {
                    console.log('run')
                    return (
                      <Col key={idx}>
                        <FormGroup>
                          <Label for={item2.id}>{item3.display_name}</Label>
                          <Input
                            id={item2.id}
                            name={item2.id}
                            placeholder=""
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    )
                  }
                })
              })}
            </Row>
          )
        })
      }
    };

    const renderForm = () => {
      if (renderItem === "PROPOSITION") {
        return (
          <Form>
            <Row md="2" className="pb-5">
              <Col>
                <FormGroup>
                  <Label for="roomID">roomID</Label>
                  <Input
                    id="roomID"
                    name="626664b327fd92a5cedb3e2b"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="roomName">部屋名</Label>
                  <Input
                    id="roomName"
                    name="626664b327fd92a5cedb3e2d"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="orderID">予約番号</Label>
                  <Input
                    id="orderID"
                    name="626664b327fd92a5cedb3e40"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <Row md="4" className="input-details">
                  <Col>
                    <FormGroup>
                      <Label for="status">ステータス</Label>
                      <Input
                        id="status"
                        name="626664b327fd92a5cedb3e41"
                        placeholder=""
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="numOrder">予約番号(数字)</Label>
                      <Input id="numOrder" name="email" placeholder="" type="email" />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="numSystem">システム採番 </Label>
                      <Input
                        id="numSystem"
                        name="email"
                        placeholder=""
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="color">背景色 </Label>
                      <Input id="color" name="email" placeholder="" type="email" />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row md="2" className="py-5">
              <Col>
                <FormGroup>
                  <Label for="dateStart">予約開始日</Label>
                  <Input
                    id="dateStart"
                    name="626664b327fd92a5cedb3e37"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="dateEnd">予約終了日</Label>
                  <Input
                    id="dateEnd"
                    name="626664b327fd92a5cedb3e38"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="timeStart">予約開始時間</Label>
                  <Input
                    id="timeStart"
                    name="626664b327fd92a5cedb3e3b"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="timeEnd">予約終了時間</Label>
                  <Input
                    id="timeEnd"
                    name="626664b327fd92a5cedb3e3c"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="username">予約者</Label>
                  <Input
                    id="username"
                    name="626664b327fd92a5cedb3e30"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="employStore">店舗担当者</Label>
                  <Input
                    id="employStore"
                    name="626664b327fd92a5cedb3e2f"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="phone">予約者電話番号</Label>
                  <Input
                    id="phone"
                    name="626664b327fd92a5cedb3e33"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="saveEmail">店舗メールアドレス</Label>
                  <Input
                    id="saveEmail"
                    name="626664b327fd92a5cedb3e32"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="email">予約者メールアドレス</Label>
                  <Input
                    id="email"
                    name="626664b327fd92a5cedb3e31"
                    placeholder=""
                    type="email"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row md="1" className="py-5">
              <Col>
                <FormGroup>
                  <Label for="idea">希望メニュー</Label>
                  <Input id="idea" name="idea" placeholder="" type="text" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="option">オプションメニュー</Label>
                  <Input id="option" name="option" placeholder="" type="text" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="desc">コメント</Label>
                  <Input id="desc" name="desc" type="textarea" />
                </FormGroup>
              </Col>
            </Row>
            <Row md="2" className="pt-5">
              <Col>
                <FormGroup>
                  <Label for="dateAccept">希望メニュー</Label>
                  <Input
                    id="dateAccept"
                    name="dateAccept"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="timeAccept">オプションメニュー</Label>
                  <Input
                    id="timeAccept"
                    name="timeAccept"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="userEnd">オプションメニュー</Label>
                  <Input id="userEnd" name="userEnd" placeholder="" type="text" />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        )
      }
      else if (renderItem === "MENU") {
        return (
          <Form>
            <Row md="2">
              <Col>
                <FormGroup>
                  <Label for="menuId">menuId</Label>
                  <Input
                    id="menuId"
                    name="626664b327fd92a5cedb3e2b"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="menuName">menuName</Label>
                  <Input
                    id="menuName"
                    name="626664b327fd92a5cedb3e2d"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row md="6">
              <Col>
                <FormGroup>
                  <Label for="option">option</Label>
                  <Input
                    id="option"
                    name="626664b327fd92a5cedb3e2d"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row md="2">
              <Col>
                <FormGroup>
                  <Label for="price">price</Label>
                  <Input
                    id="price"
                    name="626664b327fd92a5cedb3e2b"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="duration">duration</Label>
                  <Input
                    id="duration"
                    name="626664b327fd92a5cedb3e2d"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        )
      }
      else if (renderItem === "ROOM") {
        return (
          <Form>
            <Row md="1">
              <Col>
                <FormGroup>
                  <Label for="dateAccept">部屋ID</Label>
                  <Input
                    id="dateAccept"
                    name="dateAccept"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="timeAccept">部屋-席名</Label>
                  <Input
                    id="timeAccept"
                    name="timeAccept"
                    placeholder=""
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="userEnd">人数</Label>
                  <Input id="userEnd" name="userEnd" placeholder="" type="text" />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="userEnd">喫煙・禁煙</Label>
                  <Input id="userEnd" name="userEnd" placeholder="" type="text" />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        )
      }
      else if (renderItem === "CLIENT") {
        return (
          <Form>
          <Row md="2">
            <Col>
              <FormGroup>
                <Label for="clientId">clientId</Label>
                <Input
                  id="clientId"
                  name="626664b327fd92a5cedb3e2b"
                  placeholder=""
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="登録日">登録日</Label>
                <Input
                  id="登録日"
                  name="626664b327fd92a5cedb3e2d"
                  placeholder=""
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row md="1">
            <Col>
              <FormGroup>
                <Label for="dateStart">クライアント名</Label>
                <Input
                  id="dateStart"
                  name="626664b327fd92a5cedb3e37"
                  placeholder=""
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="dateEnd">クライアント名フリガナ</Label>
                <Input
                  id="dateEnd"
                  name="626664b327fd92a5cedb3e38"
                  placeholder=""
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="timeStart">emailアドレス</Label>
                <Input
                  id="timeStart"
                  name="626664b327fd92a5cedb3e3b"
                  placeholder=""
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="timeEnd">電話番号</Label>
                <Input
                  id="timeEnd"
                  name="626664b327fd92a5cedb3e3c"
                  placeholder=""
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row md="2">
            <Col>
              <FormGroup>
                <Label for="idea">郵便番号</Label>
                <Input id="idea" name="idea" placeholder="" type="text" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="option">都道府県</Label>
                <Input id="option" name="option" placeholder="" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row md="1" className="pb-5">
            <Col>
              <FormGroup>
                <Label for="timeAccept">住所1</Label>
                <Input
                  id="timeAccept"
                  name="timeAccept"
                  placeholder=""
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="userEnd">住所2</Label>
                <Input id="userEnd" name="userEnd" placeholder="" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row md="1" className="pb-5">
            <Col>
              <FormGroup>
                <Label for="dateAccept">担当者名</Label>
                <Input
                  id="dateAccept"
                  name="dateAccept"
                  placeholder=""
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="timeAccept">担当者役職</Label>
                <Input
                  id="timeAccept"
                  name="timeAccept"
                  placeholder=""
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="userEnd">部署名</Label>
                <Input id="userEnd" name="userEnd" placeholder="" type="text" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="userEnd">メモ</Label>
                <Input id="userEnd" name="userEnd" placeholder="" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row md='1'>
            <Col>
              <FormGroup>
                <Label for="userEnd">時間軸</Label>
                <Input id="userEnd" name="userEnd" placeholder="" type="text" />
              </FormGroup>
            </Col>
          </Row>
          </Form>
        )
      }
    }

  return (
    <Fragment>
      {renderForm()}
    </Fragment>
  );
}

export default FormItemView