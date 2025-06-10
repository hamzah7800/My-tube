#include "crow_all.h"
#include <fstream>
#include <sstream>

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/video/<string>")
    ([](const std::string& name){
        std::ifstream file("videos/" + name, std::ios::binary);
        if (!file.is_open()) return crow::response(404);

        std::ostringstream ss;
        ss << file.rdbuf();
        file.close();

        auto res = crow::response(ss.str());
        res.set_header("Content-Type", "video/mp4");
        return res;
    });

    app.port(8080).run();
}
