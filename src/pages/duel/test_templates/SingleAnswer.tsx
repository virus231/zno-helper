import React, { FunctionComponent } from 'react';
import {Container} from "react-bootstrap"; // importing FunctionComponent

export const SingleAnswer: FunctionComponent = () => <aside>
    {/*Single Answer*/}
    <form className="test_form">
                    <div>
                        <input type="radio" id="test_option_1" className="radio_input"
                               name="contact" value="Якийсь варіант 1"/>
                        <label htmlFor="test_option_1">
                            <svg version='1.1' width='40' height='40' x='0' y='0' viewBox='0 0 512 512'><g><path xmlns='http://www.w3.org/2000/svg' d='m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0' fill='#cad2df' data-original='#2196f3' className='svg_icon_radio'/><path xmlns='http://www.w3.org/2000/svg' d='m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0' fill='#fafafa' data-original='#fafafa' /></g></svg>
                            <span>Якийсь варіант 1</span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="test_option_2" className="radio_input"
                               name="contact" value="Якийсь варіант 2"/>
                        <label htmlFor="test_option_2" className="incorrect_option">
                            <svg version='1.1' width='40' height='40' x='0' y='0' viewBox='0 0 512 512'><g><path xmlns='http://www.w3.org/2000/svg' d='m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0' fill='#cad2df' data-original='#2196f3' className='svg_icon_radio'/><path xmlns='http://www.w3.org/2000/svg' d='m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0' fill='#fafafa' data-original='#fafafa' /></g></svg>
                            <span>Якийсь варіант 2, не правильний</span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="test_option_3" className="radio_input"
                               name="contact" value="Якийсь варіант 3"/>
                        <label htmlFor="test_option_3" className="right_option">
                            <svg version='1.1' width='40' height='40' x='0' y='0' viewBox='0 0 512 512'><g><path xmlns='http://www.w3.org/2000/svg' d='m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0' fill='#cad2df' data-original='#2196f3' className='svg_icon_radio'/><path xmlns='http://www.w3.org/2000/svg' d='m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0' fill='#fafafa' data-original='#fafafa' /></g></svg>
                            <span>Якийсь варіант 3, правильний</span>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="test_option_4" className="radio_input"
                               name="contact" value="Якийсь варіант 4"/>
                        <label htmlFor="test_option_4">
                            <svg version='1.1' width='40' height='40' x='0' y='0' viewBox='0 0 512 512'><g><path xmlns='http://www.w3.org/2000/svg' d='m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0' fill='#cad2df' data-original='#2196f3' className='svg_icon_radio'/><path xmlns='http://www.w3.org/2000/svg' d='m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0' fill='#fafafa' data-original='#fafafa' /></g></svg>
                            <span>Якийсь варіант 4<br/>рядок 2</span>
                        </label>
                    </div>
    </form>
    {/*END - Single Answer*/}
</aside>;
