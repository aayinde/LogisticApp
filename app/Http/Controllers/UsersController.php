<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use App\Models\Users;
class UsersController extends Controller
{
    private $status_code = 200;

    public function UsersSignUp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "email" => "required|email",
            "password" => "required",
            "phone" => "required"
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }

        $name = $request->name;
        $name = explode(" ", $name);
        $first_name = $name[0];
        $last_name = "";

        if (isset($name[1])) {
            $last_name = $name[1];
        }

        $UsersDataArray = array(
            "first_name" => $first_name,
            "last_name" => $last_name,
            "full_name" => $request->name,
            "email" => $request->email,
            "password" => md5($request->password),
            "phone" => $request->phone
        );

        $Users_status = Users::where("email", $request->email)->first();

        if (!is_null($Users_status)) {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! email already registered"]);
        }

        $Users = Users::create($UsersDataArray);

        if (!is_null($Users)) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registration completed successfully", "data" => $Users]);
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to register"]);
        }
    }


    // ------------ [ Users Login ] -------------------
    public function UsersLogin(Request $request)
    {

        $validator = Validator::make($request->all(),
            [
                "email" => "required|email",
                "password" => "required"
            ]
        );

        if ($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }


        // check if entered email exists in db
        $email_status = Users::where("email", $request->email)->first();


        // if email exists then we will check password for the same email

        if (!is_null($email_status)) {
            $password_status = Users::where("email", $request->email)->where("password", md5($request->password))->first();

            // if password is correct
            if (!is_null($password_status)) {
                $Users = $this->UsersDetail($request->email);

                return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $Users]);
            } else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
            }
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
        }
    }

    // ------------------ [ Users Detail ] ---------------------
    public function UsersDetail($email)
    {
        $Users = array();
        if ($email != "") {
            $Users = Users::where("email", $email)->first();
            return $Users;
        }
    }
}
