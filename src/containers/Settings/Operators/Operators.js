import React, {useState} from "react";
import UIButton from "../../../components/Button";
import {Modal} from "antd";
import InputC from "../../../components/Input/Input";
import './Operators.scss'
import SelectInputRegion from "../../../components/Input/SelectInputRegion";
import SelectNumber from "../../../components/Input/SelectNumber";
import Table from "antd/es/table";

const Operators = () => {

    const [number, setNumber] = useState('+1')

    const handleNumChange = number => {
        console.log(number)
        setNumber(number)
    }

    const [visibleModal, setVisibleModal] = useState(false);

    const handleOk = () => {
        setVisibleModal(false)
    }
    const handleCancel = () => {
        setVisibleModal(false);
    }
    const showModal = () => {
        setVisibleModal(true)
    }

    const branches = ['Ташкент', 'Нью-Йорк', 'Истанбул', 'Лондон']
    const role = ['Администратор', 'Супер-администратор', 'Оператор', 'Супер-оператор']
    const status = ['Активный', 'Неактивный']

    const dataSource = [
        {
            id: '1',
            name: 'Mike',
            login: 'make_mike',
            phone: '+998 90 000 88 88',
            branch: 'Головной офис',
            city: 'Ташкент',
            visit: '08.09.20 01:07',
            status: 'Активный',
            edit: <UIButton name='Изменить' icon='#edit' />
        },
        {
            id: '2',
            name: 'Sardor',
            login: 'sardor',
            phone: '+1 307 707 01 01',
            branch: 'New York',
            city: 'Бруклин',
            visit: '08.09.20 01:07',
            status: 'Неактивный',
            edit: <UIButton name='Изменить' icon='#edit' />
        },
    ];

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'имя и фамилия',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'логин',
            dataIndex: 'login',
            key: 'login',
        },
        {
            title: 'телефон',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'филиал',
            dataIndex: 'branch',
            key: 'branch',
        },
        {
            title: 'город',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'визит',
            dataIndex: 'visit',
            key: 'visit',
        },
        {
            title: 'статус',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: '',
            dataIndex: 'edit',
            key: 'edit'
        }
    ];

    return(
        <div>
            <div className='headContent'>
                <h5>Операторы <span>5</span></h5>
                <UIButton name='Добавить оператора' icon='#plus' onClick={showModal} />
                <Modal
                    className='modalAdd'
                    title={
                        <div className='header'>
                            <h5>
                                Добавить оператора
                            </h5>
                        </div>
                    }
                    visible={visibleModal}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={460}
                    centered
                    closeIcon={<svg><use href="#close" xlinkHref="#close"></use></svg>}
                    footer={[
                        <div className='rightBtns'>
                            <UIButton name='Отменить' />
                            <UIButton name='Добавить' typeName='primary' />
                        </div>
                    ]}
                >
                    <div className='formAddBranch formAddOperator'>
                        <div className='defaultInput'>
                            <SelectInputRegion modeName='multiple' labelText='Филиалы' requiredInput placeholderName='Выберите филиалы' values={branches} svgPath='arDown' />
                        </div>
                        <div className='doubleInput'>
                            <InputC labelText='Имя' requiredInput={true} typeName='text' />
                            <InputC labelText='Фамилия' requiredInput={true} typeName='text' />
                        </div>
                        <div className='doubleInput'>
                            <InputC labelText='Логин' requiredInput={true} typeName='text' />
                            <InputC labelText='E-mail' typeName='email' />
                        </div>
                        <div className='doubleInput'>
                            <InputC prefixSelect={<SelectNumber number={number} handleNumberChange={handleNumChange} />} requiredInput labelText='Номер телефона' />
                            <InputC prefixSelect={<SelectNumber number={number} handleNumberChange={handleNumChange} />} labelText='Дополнительный номер' />
                        </div>
                        <div className='doubleInput rmLabel'>
                            <InputC labelText='Пароль' requiredInput={true} typeName='password' placeholderName='Новый пароль' />
                            <InputC typeName='password' labelText='Повторно' placeholderName='Повторите пароль' />
                        </div>
                        <div className='doubleInput'>
                            <div className='defaultInput'>
                                <SelectInputRegion labelText='Уровень доступа' requiredInput placeholderName='Выберите роль' values={role} svgPath='arDown' />
                            </div>
                            <div className='defaultInput'>
                                <SelectInputRegion labelText='Статус' requiredInput placeholderName='Выберите статус' values={status} svgPath='arDown' />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className='contentOperators'>
                <Table dataSource={dataSource} columns={columns} pagination={false} />
            </div>
        </div>
    )
}

export default Operators