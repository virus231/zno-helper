import React, { FunctionComponent } from 'react';
import {Container} from "react-bootstrap"; // importing FunctionComponent

export const MultiAnswer: FunctionComponent = () => <aside>
    {/*Multi Answer*/}
    <form className="test_form test_multi_answer">
                    <div>
                        <input type="checkbox" id="test_option_1" className="radio_input"
                               name="contact" value="Якийсь варіант 1"/>
                        <label htmlFor="test_option_1">
                            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='40' height='40' fill='#CAD2DF' className='svg_icon_radio'/><path d='M30.1367 15.7615L19.3032 26.5946C18.9782 26.9196 18.5516 27.0832 18.125 27.0832C17.6983 27.0832 17.2717 26.9196 16.9467 26.5946L11.5301 21.178C10.8783 20.5265 10.8783 19.473 11.5301 18.8215C12.1817 18.1696 13.2348 18.1696 13.8867 18.8215L18.125 23.0598L27.7801 13.4049C28.4317 12.7531 29.4848 12.7531 30.1367 13.4049C30.7882 14.0565 30.7882 15.1096 30.1367 15.7615Z' fill='#FAFAFA'/></svg>
                            <span>Якийсь варіант 1</span>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" id="test_option_2" className="radio_input"
                               name="contact" value="Якийсь варіант 2"/>
                        <label htmlFor="test_option_2" className="incorrect_option">
                            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='40' height='40' fill='#CAD2DF' className='svg_icon_radio'/><path d='M30.1367 15.7615L19.3032 26.5946C18.9782 26.9196 18.5516 27.0832 18.125 27.0832C17.6983 27.0832 17.2717 26.9196 16.9467 26.5946L11.5301 21.178C10.8783 20.5265 10.8783 19.473 11.5301 18.8215C12.1817 18.1696 13.2348 18.1696 13.8867 18.8215L18.125 23.0598L27.7801 13.4049C28.4317 12.7531 29.4848 12.7531 30.1367 13.4049C30.7882 14.0565 30.7882 15.1096 30.1367 15.7615Z' fill='#FAFAFA'/></svg>
                            <span>Якийсь варіант 2, не правильний</span>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" id="test_option_3" className="radio_input"
                               name="contact" value="Якийсь варіант 3"/>
                        <label htmlFor="test_option_3" className="right_option">
                            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='40' height='40' fill='#CAD2DF' className='svg_icon_radio'/><path d='M30.1367 15.7615L19.3032 26.5946C18.9782 26.9196 18.5516 27.0832 18.125 27.0832C17.6983 27.0832 17.2717 26.9196 16.9467 26.5946L11.5301 21.178C10.8783 20.5265 10.8783 19.473 11.5301 18.8215C12.1817 18.1696 13.2348 18.1696 13.8867 18.8215L18.125 23.0598L27.7801 13.4049C28.4317 12.7531 29.4848 12.7531 30.1367 13.4049C30.7882 14.0565 30.7882 15.1096 30.1367 15.7615Z' fill='#FAFAFA'/></svg>
                            <span>Якийсь варіант 3, правильний</span>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" id="test_option_4" className="radio_input"
                               name="contact" value="Якийсь варіант 4"/>
                        <label htmlFor="test_option_4">
                            <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='40' height='40' fill='#CAD2DF' className='svg_icon_radio'/><path d='M30.1367 15.7615L19.3032 26.5946C18.9782 26.9196 18.5516 27.0832 18.125 27.0832C17.6983 27.0832 17.2717 26.9196 16.9467 26.5946L11.5301 21.178C10.8783 20.5265 10.8783 19.473 11.5301 18.8215C12.1817 18.1696 13.2348 18.1696 13.8867 18.8215L18.125 23.0598L27.7801 13.4049C28.4317 12.7531 29.4848 12.7531 30.1367 13.4049C30.7882 14.0565 30.7882 15.1096 30.1367 15.7615Z' fill='#FAFAFA'/></svg>
                            <span>Якийсь варіант 4<br/>рядок 2</span>
                        </label>
                    </div>
                </form>
    {/*END - Multi Answer*/}
</aside>;
